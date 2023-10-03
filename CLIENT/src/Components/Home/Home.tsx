import Hero from './Hero'
import MainContent from './MainContent'
import Animatedpage from '../Animatedpage'
import FeaturesSection from './FeaturesSection'
import ShowSteps from '../Steps/ShowSteps'
import { NewsLetter } from './NewsLetter'
import CTA from './CTA'
import Advertising from './Advertising'
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
