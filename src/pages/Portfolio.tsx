import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { StyledTitle } from '../components/StyledTitle';
import { GroupTechnology } from '../components/portfolio/GroupTechnology';
import { portfolioData } from '../data/portfolioData';

export const Portfolio = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 pt-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <StyledTitle initial={t('header.portfolio')} />

      {portfolioData.map((group) => (
        <GroupTechnology groupProject={group} key={group.id} />
      ))}
    </div>
  );
};
