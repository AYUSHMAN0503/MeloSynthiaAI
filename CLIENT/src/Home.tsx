import Hero from './Components/navbar/Hero'
import MainContent from './Components/navbar/MainContent'
import Animatedpage from './Components/Animatedpage'
import FeaturesSection from './Components/FeaturesSection'
import ShowSteps from './Steps/ShowSteps'
import CTA from './Components/CTA'
const Home = () => {
  return (
    <Animatedpage>
    <div>
    <MainContent/>
  <Hero/>
    <FeaturesSection/>
 <ShowSteps/>
 <CTA/>
    </div>
    </Animatedpage>
  )
}

export default Home
