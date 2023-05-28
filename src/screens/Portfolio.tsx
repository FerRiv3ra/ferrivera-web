import { useEffect } from 'react';

export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="mt-12 lg:mt-10">Portfolio</div>;
};
