import Hero from './Components/navbar/Hero'
import MainContent from './Components/navbar/MainContent'
import Animatedpage from './Components/Animatedpage'
import FeaturesSection from './Components/FeaturesSection'
import ShowSteps from './nft/ShowSteps'
const Home = () => {
  return (
    <Animatedpage>
    <div>
    <MainContent/>
  <Hero/>
    <FeaturesSection/>
 <ShowSteps/>
    </div>
    </Animatedpage>
  )
}

export default Home