import { useEffect, useState } from "react"

function useLocalStorageObjects(key, firstObject = null) {
  const initialValue = localStorage.getItem(key) || firstObject;

  const [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() {
    console.debug("hooks useLocalStorage useEffect", "item=", item);

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem, removeItem];
}

export default useLocalStorageObjects;