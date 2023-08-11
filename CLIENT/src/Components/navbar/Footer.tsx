import styles from "@/index";
import logo from "@/assets/melosynthia-ai-high-resolution-logo-color-on-transparent-background.png";
import { socialMedia} from "@/index";
import { Link } from "react-router-dom";
const Footer = () => (
  <>
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col !pb-5`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            Beyond human creativity - Immerse yourself in the ethereal symphonies of AI-composed melodies.
          </p>
        </div>
        <div className="py-3" >
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">

              </div>
              <div className="font-poppins font-normal grid grid-cols-2 gap-8 sm:gap-28 sm:grid-cols-3">
                <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link to="/AboutUs" className="hover:underline">About Us</Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">Future</Link>
                    </li>
                  </ul>
                </div>
                <div>

                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline ">Lorem</Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">Lorem</Link>
                    </li>
                  </ul>
                </div>
                <div>

                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link to="#" className="hover:underline">Lorem</Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:underline">Lorem</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright ©️ 2023, Team Web3 Sailors. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
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
    </section></>
);

export default Footer;

