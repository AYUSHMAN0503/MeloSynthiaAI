import Navbar from "./Components/navbar/Test2";
import Footer from "./Components/navbar/Footer";
import Home from "./Home";
import styles from "@/index";
import Signup from "./Components/navbar/signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,} from "react-router-dom";
import Signin from "./Components/navbar/Signin";


function App() {
 
  return ( <>
    <div>
    <Router>
    <Navbar/>
 
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/Register" element={<Signin/>} />
      < Route path="/Signup" element={<Signup/>} />    
    </Routes>

    </Router> 

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> <Footer/> </div>
    </div>
  </div>
  </>
  )
  
}

export default App;
