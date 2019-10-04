import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    const body = document.querySelector("body");
    const className = "dark-mode";
    if (darkMode === true) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
export default useDarkMode;
