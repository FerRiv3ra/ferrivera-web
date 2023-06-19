import { createContext, useEffect, useState } from 'react';

import i18n from '../translations/in18Config';
import { PortfolioResponse, Project } from '../types/portfolio';
import { axiosClient } from '../config/axiosClient';

type AppContextProps = {
  projects: Project[];
  loading: boolean;
  toggleLanguage: () => void;
};

const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getProjects();
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

  const getProjects = async () => {
    try {
      const { data } = await axiosClient.get<PortfolioResponse>(
        '/portfolio/projects'
      );

      setProjects(data.projects);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        loading,
        toggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
