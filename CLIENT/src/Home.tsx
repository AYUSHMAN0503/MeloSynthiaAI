import Hero from './Components/navbar/Hero'
import MainContent from './Components/navbar/MainContent'
import Animatedpage from './Components/Animatedpage'
import FeaturesSection from './Components/FeaturesSection'


const Home = () => {
  return (
    <Animatedpage>
    <div>
    <MainContent/>
    <FeaturesSection/>
      <Hero/>
 
    </div>
    </Animatedpage>
  )
}

export default Home