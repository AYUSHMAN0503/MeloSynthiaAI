import styles from "@/index";
import logo from "@/assets/melosynthia-ai-high-resolution-logo-color-on-transparent-background.png";
import { socialMedia} from "@/index";
import { Link } from "react-router-dom";
import React from "react";
import {MdArrowUpward} from "react-icons/md"
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const Footer = () => {

const [about, setAbout] = React.useState(false);

const [terms, setTerms] = React.useState(false); 
return (
  <>
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col !pb-5`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-0 sm:mb-14`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt=""
            className="w-[266px] h-[72.14px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[312px] bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text`}>
            Beyond human creativity - Immerse yourself in the ethereal symphonies of AI-composed melodies.</p>
        </div>
        <div className="py-3" >
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-2">
            <div className="md:flex md:justify-between">
              <div className="font-poppins font-normal sm:grid grid-cols-2 gap-8 sm:gap-48" >
                <div>
                  <button type="button" className="text-white font-bold font-poppins mb-6" onClick={(e) => {
                    e.preventDefault();
                      setAbout(prev => !prev);
                  }}>
                    About and Beyond
                  </button>
                 
                <ul className={about ? 'text-white font-medium ' : 'hidden'} onClick={scrollToTop}>
                    <li className="mb-4" >
                      <Link to="/AboutUs" className="hover:underline">About Us</Link>
                    </li>
                    <li className="mb-4">
                      <Link  to="/Future" className="hover:underline">Future</Link>
                    </li>
                    
                    <li >
                      <Link  to="/Melobot" className="hover:underline">MeloBOT</Link>
                    </li>
                    </ul>
                  </div>
                  <div className="mt-6 sm:mt-0">
                  <button className="text-white font-bold font-poppins mb-6" onClick={(e) => {
                      e.preventDefault();
                      setTerms(prev => !prev);
                    }}>
                    Terms Of Use
                  </button>
                  <ul className={terms ? 'text-white  font-medium' : 'hidden'} onClick={scrollToTop}>
                    <li className="mb-4">
                      <Link to="/TermsOfService" className="hover:underline">Terms Of Service</Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/ContactUs" className="hover:underline">Contact</Link>
                    </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     
      <button type="button" className="text-gold mb-3 border-gold " onClick={scrollToTop}><MdArrowUpward/></button>
       <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright ©️ 2023, Team Web3 Sailors. All Rights Reserved.
        </p>

        <div className="flex flex-row justify-between md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
             
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
    </>
)};

export default Footer;

