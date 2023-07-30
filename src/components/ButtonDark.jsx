import './ButtonDark.css';
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const ButtonDark = ({ className = "", ...props }) => {

  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const handleClick = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <div
      className={`base-layer-button ${
        darkMode ? `bg-violet-600` : `bg-violet-400`
      } ${className}`}
      onClick={handleClick}
    >
      <span
        className={`thumb ${
          darkMode ? `left-1/2` : `left-0`
        }`}
      >
        {darkMode && <i className="bi bi-brightness-alt-high m-auto"></i>}
        {!darkMode && <i className="bi bi-cloud-moon m-auto"></i>}
      </span>
    </div>
  );
};

export default ButtonDark;
