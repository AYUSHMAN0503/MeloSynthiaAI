import Navbar from "./Components/navbar/Test2";
import MainContent from "./Components/navbar/MainContent";
import Hero from "./Components/navbar/Hero";
import Footer from "./Components/navbar/Footer";
import styles from "@/index";
function App() {
    return(<>
    <div>
<Navbar/>
    <MainContent />
      <Hero/>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
     <Footer/>
    </div>
    </div>
    </div>
    </>
   
    )
  
}

export default App;
