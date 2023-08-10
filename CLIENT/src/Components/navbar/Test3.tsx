import React from "react";
import {
  Navbar,
  MobileNav,
 IconButton,
} from "@material-tailwind/react";
import logo from "@/assets/melosynthia-ai-high-resolution-logo-color-on-transparent-background.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <Link to="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Create Music
          </Link>

          <Link to="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
           NFT Marketplace
          </Link>

       <Link to= "/Register"><motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="bg-cyan-400  text-black font-medium py-2 px-4  my-0.9 rounded-lg">
         Register
         </motion.button>
        </Link>
        
    </ul>
  );
 
  return (
    
    <Navbar className=" bg-opacity-60 backdrop-blur-md bg-gray-800 fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center navbar flex-wrap border-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
        <img src={logo} alt="" width={200} /></Link>
        <div className="hidden lg:block">{navList}</div>
      
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          
        </div>
      </MobileNav>
    </Navbar>
  );
}