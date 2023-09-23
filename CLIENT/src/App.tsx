import {NavbarDefault} from "./Components/navbar/Test3";
import Footer from "./Components/navbar/Footer";
import Home from "./Home";
import styles from "@/index";
import AboutUs from "./Components/navbar/AboutUs";
import {Future} from "./Components/Future";
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import { CreateMusic } from "./Components/navbar/CreateMusic";
import TermsOfService from "./Components/TermsOfService";
import PrivacyPolicy from "./Components/PrivacyPolicy";

import ContactUs from "./Components/ContactUs";
import Melobot from "./Components/navbar/Melobot";
import NftMarketplace from "./Components/NftMarketplace";
import SellNFTs from "./Components/SellNFTs";
function App() {
 
  return ( <>
    <div>
    <Router>
     
  <NavbarDefault/>
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/AboutUs" element={<AboutUs/>} /> 
      < Route path="/Future" element={<Future/>} />
      < Route path="/Create Music" element={<CreateMusic/>} />
      < Route path="/TermsOfService" element={<TermsOfService/>} />
      < Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} /> 
      < Route path="/ContactUs" element={<ContactUs/>} /> 
      < Route path="/Melobot" element={<Melobot/>} /> 
      < Route path="/NFT" element={<NftMarketplace/>} /> 
      < Route path="/SellNft" element={<SellNFTs/>} /> 


    </Routes>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}> <Footer/> </div>
    </div>


    
   </Router> 
  </div>
  </>
  )
  
}

export default App;