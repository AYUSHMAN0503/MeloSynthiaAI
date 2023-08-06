import Navbar from "./Components/navbar/Test2";

import MainContent from "./Components/navbar/MainContent";
import Hero from "./Components/navbar/Hero";

function App() {
    return(<>
    <div>
<Navbar/>

<div className="min-h-screen ">
      {/* <Header /> */}
      <MainContent />
      <Hero/>
     
    </div>
    </div>
    </>
   
    )
  
}

export default App;
