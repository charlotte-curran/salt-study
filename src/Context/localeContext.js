import React, { createContext, useContext, useState } from "react";
import { saltStudyText } from "../TextContent/saltstudy";

const LocaleContext = createContext(null);

const LocaleContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(0);
  const [content, setContent] = useState(null);

  //to avoid string matching throughout the app, using a number
  // 0 = no locale set
  // 1 = sthlm
  // 2 = amsterdam
  // 3 = oslo

  const swapLocale = localeNum => {
    if (localeNum === locale) {
      return;
    }
    if (localeNum < 4) {
      setLocale(localeNum);
      if (localeNum === 1 || localeNum === 2) {
        setContent(saltStudyText.stockholm);
      }
      if (localeNum === 3) {
        setContent(saltStudyText.oslo);
      }
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, swapLocale, content }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;
export const useLocaleContext = () => useContext(LocaleContext);
