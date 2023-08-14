import React, { useState } from 'react';
import { LinearGradient } from 'react-text-gradients';
import musical from "@/assets/musical.jpg";
import { m } from 'framer-motion';

export const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sending email to server - frontend ones dont touch it its for backend..
    console.log('Submitted email:', email);
  };

  return (
    <>
      <div className="py-5  justify-center lg:py-14 md:py-10 sm:py-8 xs:py-6">
        <div className="container mx-auto px-5 rounded-lg xl:max-w-screen-xl ">
          <div
            className="p-5 rounded-lg lg:flex lg:justify-between lg:items-center lg:p-10 bg-center"
            style={{
              background:
                "radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%)",
              backdropFilter: "2rem",
            }}
          >
            <div>
              <h2 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold">
                Get <b>Notified</b> When we Update
              </h2>
              <p className="text-white xl:text-xl font-sans mt-4">
                Never miss an update by being a part of our NewsLetter!!
              </p>
            </div>
            <div className="w-full mt-5 sm:w-auto lg:mt-0 lg:ml-5">
              <div className="flex justify-center space-x-2.5 lg:justify-start">
                <div className="p-2.5  border-white transition-colors">
                  <form
                    className="mt-5 sm:mx-auto sm:flex sm:max-w-lg lg:mx-0"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="w-full px-5 py-3 outline-none border rounded-lg shadow-sm  border-[#3c3c3c] bg-white focus:ring-1"
                      type="email"
                      placeholder="Your e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="mt-2.5 px-5 py-3 rounded-lg  focus:outline-none font-medium text-white bg-blue-600 sm:flex-shrink-0 sm:w-auto sm:mt-0 sm:ml-5"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  <br />
                  <div className="flex items-center w-full justify-center">
                    <label
                      htmlFor="checkbox"
                      className="text-white text-sm mt-1 r ml-2"
                    >
                      <input
                        className="w-4 h-4 rounded  mr-2"
                        id="checkbox"
                        type="checkbox"
                      ></input>
                      I agree to receive other communications from MelosynthiaAI.*
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
