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
                desc='Connect with metaamask to complete the transactions!!'
                icon='1'
                textSize='text-xl'
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <Steps
                title='Create your music'
                desc='Create your unique piece of music alongside lyrics using prompts.'
                icon='2'
                textSize='text-xl'
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <Steps
                title='List them for sale'
                desc='List them as NFTs in marketplace and earn money.'
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