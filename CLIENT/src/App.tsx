import {NavbarDefault} from "./Components/navbar/Test3";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import styles from "@/index";
import AboutUs from "./Components/Footer/AboutUs";
import {Future} from "./Components/Footer/Future";
import UploadForm from "./Components/CreateMusic/Form"
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import { CreateMusic } from "./Components/CreateMusic/CreateMusic";
import TermsOfService from "./Components/Footer/TermsOfService";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy";

import ContactUs from "./Components/Footer/ContactUs";
import Melobot from "./Components/Melobot";
import NftMarketplace from "./Components/NFT/NftMarketplace";
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
      <Route path="/UploadForm" element={<UploadForm/>}/>

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