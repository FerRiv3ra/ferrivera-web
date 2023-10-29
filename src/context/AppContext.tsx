import { createContext, useEffect, useState } from 'react';

import i18n from '../translations/in18Config';
import { PortfolioResponse, Project } from '../types/portfolio';
import { axiosClient } from '../config/axiosClient';

type AppContextProps = {
  projects: Project[];
  loading: boolean;
  theme: 'light' | 'dark';
  getProject: (projectId: string) => Project;
  getRelatedProjects: (title: string) => Project[];
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    const userThemeStg = localStorage.getItem('theme');

    if (!!userThemeStg) {
      setTheme(userThemeStg as 'dark' | 'light');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }
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

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const getProjects = async () => {
    try {
      const { data } = await axiosClient.get<PortfolioResponse>(
        '/653254a054105e766fc4bbbd',
        {
          headers: {
            'X-Access-Key': `$2a$10$zcagp9KCDv0MnsLo6gurd.${import.meta.env
              .VITE_BACKEND_KEY!}`,
          },
        }
      );

      setProjects(data.record.projects);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getProject = (projectId: string) => {
    return projects.filter((project) => project.uid === projectId)[0];
  };

  const getRelatedProjects = (projectId: string) => {
    const title = getProject(projectId).name;

    const keyword = title.toLowerCase().startsWith('the')
      ? title.split(' ')[1]
      : title.split(' ')[0];

    const relatedProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return relatedProjects;
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        loading,
        getProject,
        theme,
        getRelatedProjects,
        toggleLanguage,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
