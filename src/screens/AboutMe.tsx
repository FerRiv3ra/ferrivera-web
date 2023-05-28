import { useEffect } from 'react';

export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>AboutMe</div>;
};
