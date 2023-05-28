import { createContext, useEffect } from 'react';

import i18n from '../translations/in18Config';

type AppContextProps = {
  toggleLanguage: () => void;
};

const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: any) => {
  useEffect(() => {
    const userLangStg = localStorage.getItem('userLang');

    const navLang = window.navigator.language.slice(0, 2);

    if (!!userLangStg) {
      i18n.changeLanguage(userLangStg);
    } else {
      localStorage.setItem('navLang', navLang);
      i18n.changeLanguage(navLang);
    }
  }, []);

  const toggleLanguage = () => {
    const currentLang = i18n.language;

    if (currentLang === 'es') {
      i18n.changeLanguage('en');
      localStorage.setItem('userLang', 'en');
    } else {
      i18n.changeLanguage('es');
      localStorage.setItem('userLang', 'es');
    }
  };

  return (
    <AppContext.Provider
      value={{
        toggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
