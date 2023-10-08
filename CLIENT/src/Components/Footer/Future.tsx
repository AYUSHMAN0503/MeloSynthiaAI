import { LinearGradient } from 'react-text-gradients'

export const Future = () => {
  return (
    <div>
        <div className='w-full mt-5 flex justify-center py-14 font-bold'>
            <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">The future of MeloSynthia AI</h1>
            </LinearGradient>
            
        </div>
     
        <div className='w-full flex justify-center mb-14'>
            
            <ul style={{ listStyleType: 'disc' }} className='text-white px-8 py-4 text-md md:lg lg:text-xl xl:text-2xl'>
                <li className='mb-11 text-pink-400 '>In the next update of MeloSynthiaAI, Song-Snippets feature we will allow users to share their vocal files, which our AI model will then process to add complementary tunes in the background of the vocal provided. It also allows users to mint NFTs and list them for sale through the NFThub(BTFS). </li>
                <li className='mb-11 text-pink-400'>With future enhancements user can generate longer lyrics in Lyrical AI for up to 20 lines! at numerous genres and moods. Music generation will also be elevated as new time duration possibilities, such as 45 seconds and 2 minutes, are added to the tune generation.</li>
                <li className='mb-11 text-pink-400'>While constructing NFTs on the platform, users can use BitTorrent File System (BTFS) to decentralise their metadata their metadata while creating NFTs on the platform. With BTFS is a next-generation file sharing protocol, cost-effective, scalable and high-performing storage and sharing solutions will empower our platform.</li>
                <li className='mb-11 text-pink-400'> BTFS, a next-generation file sharing protocol, will enable our platform with cost-effective, scalable, and high-performance storage and sharing options.</li>
                <li className='mb-11 text-pink-400'> Additionally, MeloSynthiaAI facilitates artists to manage their NFTs collections on the platform and raise their profile on the network. On MeloSynthiaAI, users can also receive updates from their favourite musicians about their most recent works which will be just a click away.</li>
                <li className='mb-11 text-pink-400'> A fully functional search bar to improve user experience, so that the users can directly navigate..</li>

            </ul>
        </div>
    </div>
  )
}







