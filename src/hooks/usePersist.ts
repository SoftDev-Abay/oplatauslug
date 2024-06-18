import { useState, useEffect } from "react";

const usePersist = () => {
  // changed initial code here due to the typescript error

  const persistLocalStorage = localStorage.getItem("persist");
  const parsedPersist = JSON.parse(persistLocalStorage || "false");

  const [persist, setPersist] = useState(parsedPersist);

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
};
export default usePersist;
