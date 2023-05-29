import { useEffect } from 'react';
import { StyledTitle } from '../components/StyledTitle';
import { useTranslation } from 'react-i18next';
import { GroupTechnology } from '../components/portfolio/GroupTechnology';

export const Portfolio = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <StyledTitle initial={t('header.portfolio')} />

      <GroupTechnology technology="Apps móviles" />
    </div>
  );
};
