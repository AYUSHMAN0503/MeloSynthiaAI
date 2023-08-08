import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from "@/assets/melosynthia-ai-high-resolution-logo-color-on-transparent-background.png"

import { motion } from "framer-motion"
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-opacity-60 backdrop-blur-md bg-gray-800 fixed top-0 left-0 right-0 z-50 w-full flex py-4 justify-between items-center navbar">
      <Link to="/">
        <img className="scale-125 "src={Logo} alt="" width={190} style={{ marginLeft: '3.5rem' }}/>
        </Link>
     
        <div className="container mx-auto  md:flex md:items-center md:justify-between" style={{marginRight:'1rem'}}>
       
            <div className="flex justify-end items-center ">
          <button
            className="md:hidden rounded-lg p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z" />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex flex-col md:flex-row md:items-end md:space-x-4 ${
            isOpen ? 'flex' : 'hidden'
          }`}>

          {/* Buttons of Navigation Bar*/}

          <Link to="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Create Music
          </Link>

          <Link to="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
           NFT Marketplace
          </Link>

          <Link to="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            About Us
          </Link>

          <Link to="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Future
          </Link>

         <Link to=""><motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="bg-cyan-400  text-black font-medium py-2 px-4  my-0.9 rounded-lg ">
         Get started
        </motion.button></Link>

       <Link to= "/Register"><motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="bg-cyan-400  text-black font-medium py-2 px-4  my-0.9 rounded-lg">
         Register
         </motion.button>
        </Link>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
          