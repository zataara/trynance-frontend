import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = []) => {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialValue);
  
  const clearLocalStorage = () => setValue("");

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue, clearLocalStorage];
};

export { useLocalStorage };