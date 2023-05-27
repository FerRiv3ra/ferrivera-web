import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalInfo } from '../components/PersonalInfo';

export const MainScreen = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = window.navigator.language;

    i18n.changeLanguage(lang.slice(0, 2));
  }, []);

  return (
    <div className="mt-12 lg:mt-10">
      <PersonalInfo />
    </div>
  );
};
