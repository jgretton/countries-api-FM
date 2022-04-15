import React, { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="flex flex-row h-28 bg-white justify-between drop-shadow-md px-4">
      <p className="text-base self-center font-bold">Where in the world?</p>

      <button className="text-sm" onClick={() => setDarkMode(!darkMode)}>
        <span className="flex flex-row ">
          <MdOutlineDarkMode className="self-center mr-2" />
          Dark Mode
        </span>
      </button>
    </header>
  );
};
