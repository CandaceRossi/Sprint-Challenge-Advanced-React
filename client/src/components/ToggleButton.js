import { useLocalStorage } from "../hooks/useLocalStorage";
import React from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useLocalStorage(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav>
      <h1> Toggle Dark Mode Here! </h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default ToggleButton;
