import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { Item } from '../components/privacy-policy/Item';

export const PrivacyPolicy = () => {
  const items = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9'];

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">{t('policy.initial')}</span>
          </span>{' '}
          {t('policy.title')}
        </h2>
      </div>
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
