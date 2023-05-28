import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { StyledTitle } from '../components/StyledTitle';
import { AppCard } from '../components/account-deletion/AppCard';
import { imgNameType } from '../helpers/imgSelector';

export const AccountDeletion = () => {
  const apps: imgNameType[] = ['theVineApp', 'checkStudents'];

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <StyledTitle initial={t('deletion.initial')} text={t('deletion.text')} />

      <section className="text-gray-600 body-font">
        <div className="container p-5 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {apps.map((app) => (
              <AppCard appTitle={app} key={app} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
