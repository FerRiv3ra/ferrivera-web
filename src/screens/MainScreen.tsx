import { useEffect } from 'react';

import { PersonalInfo } from '../components/PersonalInfo';

export const MainScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-12 lg:mt-10">
      <PersonalInfo />
    </div>
  );
};
