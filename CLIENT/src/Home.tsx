import Hero from './Components/navbar/Hero'
import MainContent from './Components/navbar/MainContent'
import Animatedpage from './Components/Animatedpage'
import FeaturesSection from './Components/FeaturesSection'
import ShowSteps from './Steps/ShowSteps'
import { NewsLetter } from './Components/NewsLetter'
import CTA from './Components/CTA'
import Advertising from './Components/Advertising'
const Home = () => {
  return (
    <Animatedpage>
    <div>
    <MainContent/>
  <Hero/>
    <FeaturesSection/>
 <ShowSteps/>
 <NewsLetter />
 <Advertising/>
 <CTA/>
    </div>
    </Animatedpage>
  )
}

export default Home
