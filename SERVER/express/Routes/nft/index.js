const router = require('express').Router();
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
const FormData = require("form-data");
const { nft: nftEnvVariables } = require("../../config");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
});

const network = axios.create({
  baseURL: nftEnvVariables.net_url,
  headers: {
    "x-api-key": nftEnvVariables.api_key,
  },
});

router.post("/upload", cors(), upload.single("file"), async (req, res) => {
  console.log("Received a POST request to /upload");
  console.log("Sending response");
  let data = new FormData();
  data.append("file", req.file.buffer, { filename: req.file.originalname });
  data.append("isSync", "true");
  console.log({ uploadImageData:data });

  async function uploadImageOnIpfs() {
    const ipfsImg = await network.post("/ipfs/file", data, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    });
    return ipfsImg.data;
  }
  async function uploadMetadataOnIpfs(imgCid) {
    const metadataJson = {
      name: `A Wonderful NFT`,
      description: `Probably the most awesome NFT ever created !`,
      image: `ipfs://ipfs/${imgCid}`,
    };
    const ipfsMetadata = await network.post("/ipfs/json", {
      name: "My NFT metadata Json",
      content: metadataJson,
      isSync: true,
    });
    return ipfsMetadata.data;
  }

  const smart_contract_network = nftEnvVariables.smart_contract_network;
  const smart_contract_address = nftEnvVariables.smart_contract_address;
  const wallet_address = nftEnvVariables.wallet_imported_on_starton;

  async function mintNFT(receiverAddress, metadataCid) {
    const nft = await network.post(
      `/smart-contract/${smart_contract_network}/${smart_contract_address}/call`,
      {
        functionName: "mint",
        signerWallet: wallet_address,
        speed: "low",
        params: [receiverAddress, metadataCid],
      }
    );
    return nft.data;
  }

  try {
    // const receiverAddress = process.env.RECEIVER_ADDRESS;
    console.log({ nftEnvVariables });
    const receiverAddress = nftEnvVariables.reciever_address;
    const ipfsImgData = await uploadImageOnIpfs();
    const ipfsMetadata = await uploadMetadataOnIpfs(ipfsImgData.cid);
    const nft = await mintNFT(receiverAddress, ipfsMetadata.cid);
    console.log(!!nft);
    res.status(201).json({
      transactionHash: nft.transactionHash,
      cid: ipfsImgData.cid,
    });
  } catch (error) {
    console.log("Error in upload: ", error);
    res.status(500).json({
      success: false,
      error: error?.message,
    });
  }
});



module.exports = router;