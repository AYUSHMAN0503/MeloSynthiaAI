import { motion } from 'framer-motion';
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';
import Testimonial from '../testimonials';
import testimonials from '../testimonialsData';


export const CreateMusic = () => {
  const genres = ['Hip-Hop', 'Classic', 'Jazz', 'Culural', 'Melody', 'Symphony'];
  const styles = ['Ambient', 'Lofi', 'Slow-Reverb'];
  const lengths = ['0:10', '0:20', '0:30', '0:40', '0:50', '1:00'];
  const tempos = ['Slow', 'Medium', 'Fast'];


  return (
    <Animatedpage>
      <h1 className='text-5xl p-2 mb-8 mt-4 text-center'>
      < LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Generate your melodies with MeloSynthiaAI</LinearGradient>
      </h1>
      <div className='container pt-14 px-6 pb-6 flex flex-wrap pr-0'>
        <div className='text-white w-2/5 border-r-2 px-4 '>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='flex-shrink-0 border-dotted hover:bg-cyan-700 border-4 border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg'
          >
            + New Music
          </motion.button>
          <h3 className='p-10 flex justify-left'>
            Your Generated NFTs/Music
          </h3>
        </div>

        <div className='text-white w-3/5 p-4 px-10 pr-0'>
          <div>
            <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Choose Your Genre:</b>
              {genres.map((genre) => (
                <button
                  key={genre}
                  className='mr-2 mb-8 px-4 py-2 p-10  bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {genre}
                </button>
              ))}
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Styles:</b>
              {styles.map((sort) => (
                <button
                  key={sort}
                  className='mr-2 mb-8 px-4 py-2 p-10  bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {sort}
                </button>
              ))}
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Choose Length:</b> {lengths.map((length) => (
                <button
                  key={length}
                  className='mr-2 mb-8 px-4 py-2 p-10 bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {length}
                </button>
              ))}
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Choose Tempo:</b>{tempos.map((tempo) => (
                <button
                  key={tempo}
                  className='mr-2 mb-8 px-4 py-2 p-10 bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {tempo}
                </button>
              ))}
          </div>

          <div className='w-full flex  flex-row justify-center items-center py-8 flex-wrap'>
            <input
              className='mr-[4vw] appearance-none bg-transparent border- w-[40vw] mb-6 text-white-700 py-[1vw] focus:outline-none text-lg'
              type='text'
              placeholder="A pop music with Eminem song's beat"
            />
            <button
              className='flex-shrink-0 border-transparent bg-cyan-500 hover:bg-cyan-700 border-4 border-cyan-500 hover:border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg'
              type='button'
            >
              Compose
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className='container mx-auto p-8'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text'>
          Users who immersed themselves in ethereal symphonies!!</h2>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </Animatedpage>
  );
};
