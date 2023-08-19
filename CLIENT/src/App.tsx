import {NavbarDefault} from "./Components/navbar/Test3";
import Footer from "./Components/navbar/Footer";
import Home from "./Home";
import styles from "@/index";
import Signup from "./Components/navbar/signup";
import AboutUs from "./Components/navbar/AboutUs";
import {Future} from "./Components/Future";
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import Signin from "./Components/navbar/Signin";
import { CreateMusic } from "./Components/navbar/CreateMusic";
import TermsOfService from "./Components/TermsOfService";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import FeaturesSection from "./Components/FeaturesSection";
import SongSnippets from "./Components/songSnippets.tsx"

function App() {
 
  return ( <>
    <div>
    <Router>
     
  <NavbarDefault/>
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/Register" element={<Signin/>} />
      < Route path="/Signup" element={<Signup/>} /> 
      < Route path="/AboutUs" element={<AboutUs/>} /> 
      < Route path="/Future" element={<Future/>} />
      < Route path="/Create Music" element={<CreateMusic/>} />
      < Route path="/TermsOfService" element={<TermsOfService/>} />
      < Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} /> 
      < Route path="/SongSnippets" element={<SongSnippets/>} /> 
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
