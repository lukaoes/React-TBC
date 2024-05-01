'use client'
import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [themeMode, setThemeMode] = useState<string>('');

  const toggleTheme = () => {
    const appElement = document.querySelector('.app');
    if (appElement?.classList.contains('dark-mode')) {
      appElement.classList.remove('dark-mode');
      setThemeMode('DARK');
      localStorage.setItem('themeMode', 'light');
    } else {
      appElement?.classList.add('dark-mode');
      setThemeMode('LIGHT');
      localStorage.setItem('themeMode', 'dark');
    }
  };

  const setSystemThemeMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeMode = prefersDarkMode ? 'dark' : 'light';
    const appElement = document.querySelector('.app');
    if (themeMode === 'dark') {
      setThemeMode('LIGHT');
      appElement?.classList.add('dark-mode');
    } else {
      appElement?.classList.remove('dark-mode');
      setThemeMode('DARK');
    }
    localStorage.setItem('themeMode', themeMode);
  };

  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode');
    if (storedThemeMode) {
      const appElement = document.querySelector('.app');
      if (storedThemeMode === 'dark') {
        appElement?.classList.add('dark-mode');
        setThemeMode('LIGHT');
      } else {
        appElement?.classList.remove('dark-mode');
        setThemeMode('DARK');
      }
    } else {
      setSystemThemeMode();
    }
  }, []);

  return <button onClick={toggleTheme}>{themeMode}</button>;
};

export default ThemeButton;
