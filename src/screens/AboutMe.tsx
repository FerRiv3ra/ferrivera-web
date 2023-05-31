import { useEffect } from 'react';

import { AboutMeComponent } from '../components/about-me/AboutMeComponent';

export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 pt-15 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <AboutMeComponent />
    </div>
  );
};
