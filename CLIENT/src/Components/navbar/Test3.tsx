import React from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import logo from "@/assets/melosynthia-ai-high-resolution-logo-color-on-transparent-background.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Test3.css"
import { useState } from "react";


export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">

      <Link to="#" >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700 shadow-md shadow-white/50">NFT Marketplace</motion.button>
      </Link>

      <Link to="/Register"><motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className="bg-cyan-400  text-black font-medium py-2 px-4  my-0.9 rounded-lg shadow-md shadow-white/60">
        Register
      </motion.button>
      </Link>

    </ul>
  );

  return (

    <Navbar className=" bg-opacity-60 backdrop-blur-md bg-gray-800 fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center navbar flex-wrap border-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Link to="/">
          <img src={logo} alt="" width={200} /></Link>
        <div className=" flex-col justify-center">
          <div className="relative w-full sm:max-w-2xl sm:mx-auto  hidden lg:flex">
            <div className="overflow-hidden z-0 rounded-full relative p-0.5">
              <form role="form" className="relative flex z-50 bg-slate-900 rounded-full  " style={{ height: "40px" }}>
                <input type="text" placeholder="Enter your query here" className="rounded-full flex-1 px-6 py-4 text-white bg-slate-900 focus:outline-none shadow-lg shadow-cyan-500" />
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 text-white bg-transparent rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </motion.button>
              </form>
              <div className="glow glow-1 z-10 bg-white absolute"></div>
              <div className="glow glow-2 z-20 bg-cyan-400 absolute "></div>
              <div className="glow glow-3 z-10 bg-cyan-400 absolute"></div>
              <div className="glow glow-4 z-20 bg-white absolute "></div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">{navList}</div>


        <IconButton
          variant="text"
          className="ml-auto  fixed top-5 left-0 right-12 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 "
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}

            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto ">
          {navList}

        </div>
      </Collapse>
    </Navbar>
  );
}