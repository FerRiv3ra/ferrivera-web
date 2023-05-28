import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { Item } from '../components/privacy-policy/Item';
import { StyledTitle } from '../components/StyledTitle';

export const PrivacyPolicy = () => {
  const items = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9'];

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <StyledTitle
        initial={t('policy.initial')}
        text={t('policy.title') as string}
      />

      <div className="container px-4 lg:px-10">
        <ul className="list-disc">
          {items.map((item) => (
            <Item item={item} key={item} />
          ))}
        </ul>
        <p className="text-base text-gray-700 md:text-lg mt-8 px-4 lg:px-10 text-center">
          {t('policy.msg')}{' '}
          <span className="font-bold">{t('policy.email')}</span>
        </p>
      </div>
    </div>
  );
};
