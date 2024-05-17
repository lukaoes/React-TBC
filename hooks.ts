import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialState?: any) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState;

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
