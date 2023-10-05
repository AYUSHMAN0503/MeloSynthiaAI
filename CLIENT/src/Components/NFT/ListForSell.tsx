import React, { useState, ChangeEvent } from "react";

import "./NFT.css"

export function List() {
  const [tokenInput, setTokenInput] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedChars = /^[a-zA-Z0-9]*$/; 

    if (!allowedChars.test(event.key)) {
      event.preventDefault(); // Prevent the key press
      setShowWarning(true); // Show the warning message
      setTimeout(() => {
        setShowWarning(false); // Hide the warning message after 5 seconds
      }, 4000); // 4000 milliseconds (4 seconds)
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setTokenInput(inputValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Handle form submission with valid input
    console.log("Token ID:", tokenInput);
  };

  return (
    <form className="mx-10 sm:mx-20 lg:mx-40 p-10 w-3/4" onSubmit={handleSubmit}>
      <div className="relative flex">
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg fe focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Token Id"
          value={tokenInput}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          List NFT
        </button>
      </div>
      {showWarning && (
        <p className="text-white text-sm mt-2">Invalid character. Please enter only letters and numbers.</p>
      )}
    </form>
  );
}
