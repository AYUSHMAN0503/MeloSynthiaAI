import gradient from "@/assets/Banner.jpeg"
import { Link } from 'react-router-dom'

const CTA = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

    return (
        <div>
            <section className="relative overflow-hidden bg-cover bg-bottom bg-no-repeat  h-[270px] md:h-[350px] sm:h-[300px]" style={{ backgroundImage: `url(${gradient})`, }}>

                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-3xl sm:text-4xl  md:text-6xl xl:text-10xl lg:text-7xl tracking-tight Ttcommons sans-serif font-extrabold leading-tight text-white ">Compose the future with MeloSynthia AI</h2>
                        <p className="mb-6 font-light text-white/80 text-sm md:text-lg">MeloSynthia AI: Redefining Creativity Through Artificially Intelligent Music Innovations!</p>
                        <Link to="/Create Music">
                  <button onClick={scrollToTop} className=" text-purple-500 rounded-full font-semibold px-8 py-4 bg-black focus:outline-none ">Create Music</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CTA