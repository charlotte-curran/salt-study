import React, { createContext, useContext, useState, useEffect } from "react";
const throttle = require("lodash.throttle");

const WindowDimensionsContext = createContext(null);
const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    const throttledResizeHandler = throttle(handleResize, 150, {
      trailing: true
    });
    window.addEventListener("resize", throttledResizeHandler);
    return () => {
      window.removeEventListener("resize", throttledResizeHandler);
    };
  }, []);
  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};

export default WindowDimensionsProvider;
export const useWindowDimensionsContext = () =>
  useContext(WindowDimensionsContext);
