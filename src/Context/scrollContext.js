import React, { createContext, useContext, useState, useEffect } from "react";
const throttle = require("lodash.throttle");

const ScrollContext = createContext(null);
const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState({
    y: window.scrollY,
    x: window.scrollX
  });

  useEffect(() => {
    const handleScroll = () => {
      setScroll({
        y: window.scrollY,
        x: window.scrollX
      });
    };
    const throttledScrollHandler = throttle(handleScroll, 150, {
      leading: true
    });
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []);
  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  );
};

export default ScrollProvider;
export const useScrollContext = () => useContext(ScrollContext);
