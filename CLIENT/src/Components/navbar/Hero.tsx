import styles from "@/index";
import music from "@/assets/music.png";
import { LinearGradient } from 'react-text-gradients'
import { motion } from "framer-motion";
import React from "react"
import { Link } from "react-router-dom";
import "./Test3.css"
const Hero = () => {

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} px-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">

          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white text-sm xs:text-2xl" > AI MUSIC GENERATOR FOR CREATORS </span>{""}
          </p>

        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span> <LinearGradient gradient={['to right', '#00FFFF ,#ffffff']}>Generation</LinearGradient></span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Music Platform.
        </h1>

        <div className="flex flex-col justify-center">
          <div className="relative p-5 w-full sm:max-w-2xl sm:mx-auto">
            <div className="overflow-hidden z-0 rounded-full relative p-0.5">
              <form role="form" className="relative flex z-50 rounded-full bg-transparent ">
                <Link to="/Create Music">
                  <button className=" text-white rounded-full font-semibold px-8 py-4 bg-slate-900 focus:outline-none ">Create Music</button></Link>
              </form>

              <div className="glow glow-2 z-10 bg-white absolute"></div>
              <div className="glow glow-1 z-20 bg-fuchsia-600 absolute "></div>
              <div className="glow glow-3 z-10 bg-fuchsia-600 absolute"></div>
              <div className="glow glow-4 z-20 bg-white absolute "></div>
            </div>
          </div>
        </div>   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The next level AI music generation platform created by team web3 sailors named MeloSynthiaAI. Here Melo stands for Melody and Synthia for Synthesis..
        </p>

      </div>

      <motion.div
        whileHover={{ scale: [null, 0.8, 0.8] }}
        transition={{ duration: 0.3 }}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={music} alt="Music" className="w-[80%] h-[90%] relative z-[5]" style={{ backgroundImage: "" }} />
      </motion.div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>

    </section>
  );
};

export default Hero;

