import { useEffect } from 'react';

import { NotFoundComponent } from '../components/NotFoundComponent';

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white ">
      <NotFoundComponent />
    </section>
  );
};
