"use client";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [themeMode, setThemeMode] = useState<string>("");

  const toggleTheme = () => {
    const appElement = document.querySelector(".app");
    if (appElement?.classList.contains("dark-mode")) {
      appElement.classList.remove("dark-mode");
      setThemeMode("DARK");
      localStorage.setItem("themeMode", "light");
    } else {
      appElement?.classList.add("dark-mode");
      setThemeMode("LIGHT");
      localStorage.setItem("themeMode", "dark");
    }
  };

  const setSystemThemeMode = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const themeMode = prefersDarkMode ? "dark" : "light";
    const appElement = document.querySelector(".app");
    if (themeMode === "dark") {
      setThemeMode("LIGHT");
      appElement?.classList.add("dark-mode");
    } else {
      appElement?.classList.remove("dark-mode");
      setThemeMode("DARK");
    }
    localStorage.setItem("themeMode", themeMode);
  };

  useEffect(() => {
    const storedThemeMode = localStorage.getItem("themeMode");
    if (storedThemeMode) {
      const appElement = document.querySelector(".app");
      if (storedThemeMode === "dark") {
        appElement?.classList.add("dark-mode");
        setThemeMode("LIGHT");
      } else {
        appElement?.classList.remove("dark-mode");
        setThemeMode("DARK");
      }
    } else {
      setSystemThemeMode();
    }
  }, []);

  return (
    <button onClick={toggleTheme}>
      {themeMode === "LIGHT" ? (
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            strokeWidth="3"
            d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
            fill="#000"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeButton;
