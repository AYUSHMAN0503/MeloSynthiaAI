import React from 'react'
import Steps from "./Steps"
import { motion } from 'framer-motion'

//framer motion animations start
const parentVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.3 },
    },
  }
  const childVariants = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  }

function ShowSteps() {
  return (
    <>
      <section className='py-16 p-4'>
        <h1 className='text-6xl pb-5 bg-clip-text text-cyan-400 text-center text-transparent '>STEPS</h1>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6'
          >
            <motion.div variants={childVariants}>
              <Steps
                title='Connect your wallet'
                desc='Use Trust Wallet, Metamask or any wallet to connect to the app.'
                icon='1'
                textSize='text-xl'
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <Steps
                title='Create your NFT Item'
                desc='Upload your NFTs and set a title, description and price.'
                icon='2'
                textSize='text-xl'
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <Steps
                title='List them for sale'
                desc='Earn ETH and BIT for all your NFTs that you sell on our marketplace.'
                icon='3'
                textSize='text-xl'
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ShowSteps;