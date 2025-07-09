import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [Lang, SetLang] = useState(true);

  const toggleLang = () => SetLang((prev) => !prev);

  useEffect(() => {
    const Langpref = localStorage.getItem("pref");
    if (Langpref) SetLang(JSON.parse(Langpref));
  }, []);

  useEffect(() => {
    localStorage.setItem("pref", JSON.stringify(Lang));
  }, [Lang]);

  return (
    <LanguageContext.Provider value={{ Lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
