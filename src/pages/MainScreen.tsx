import { useEffect } from 'react';

import { PersonalInfo } from '../components/home/PersonalInfo';
import { PortfolioPreview } from '../components/home/PortfolioPreview';

export const MainScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-12 lg:mt-10">
      <PersonalInfo />

      <PortfolioPreview />
    </div>
  );
};
