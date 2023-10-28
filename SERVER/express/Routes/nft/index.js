const router = require('express').Router();
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
const FormData = require("form-data");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
});

const network = axios.create({
  baseURL: process.env.NET_URL,
  headers: {
    "x-api-key": process.env.API_KEY,
  },
});

router.post("/upload", cors(), upload.single("file"), async (req, res) => {
  console.log("Received a POST request to /upload");
  // ... rest of your code ...
  console.log("Sending response");
  let data = new FormData();
  console.log(data);
  const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
  data.append("file", blob, { filename: req.file.originalnam });
  data.append("isSync", "true");

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

  const smart_contract_network = process.env.SMART_CONTRACT_NETWORK;
  const smart_contract_address = process.env.SMART_CONTRACT_ADDRESS;
  const wallet_address = process.env.WALLET_IMPORTED_ON_STARTON;

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
  const receiverAddress = process.env.RECEIVER_ADDRESS;
  const ipfsImgData = await uploadImageOnIpfs();
  const ipfsMetadata = await uploadMetadataOnIpfs(ipfsImgData.cid);
  const nft = await mintNFT(receiverAddress, ipfsMetadata.cid);
  console.log(nft);
  res.status(201).json({
    transactionHash: nft.transactionHash,
    cid: ipfsImgData.cid,
  });
});



module.exports = router;