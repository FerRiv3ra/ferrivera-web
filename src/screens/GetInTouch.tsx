import { useEffect } from 'react';

export const GetInTouch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="mt-12 lg:mt-10">GetInTouch</div>;
};
