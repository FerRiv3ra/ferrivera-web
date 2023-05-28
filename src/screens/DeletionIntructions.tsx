import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { NotFoundComponent } from '../components/NotFoundComponent';
import { StyledTitle } from '../components/StyledTitle';
import { useAppsData } from '../hooks/useAppsData';
import { Instructions } from '../components/account-deletion/Instructions';

export const DeletionIntructions = () => {
  const { app: appId } = useParams();
  const { data } = useAppsData(appId || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <NotFoundComponent />;

  return (
    <div className="px-4 py-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <StyledTitle initial={data.title} />

      <Instructions appId={appId as string} />
    </div>
  );
};
