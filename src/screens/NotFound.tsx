import { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import imgNotFound from '../assets/not-found.png';

export const NotFound = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-900">{t('404.error')}</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            {t('404.notFound')}
          </h1>
          <p className="mt-4 text-gray-500">{t('404.msg')}</p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>{t('404.goBack')}</span>
            </button>

            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-950 rounded-lg shrink-0 sm:w-auto hover:bg-blue-900"
            >
              {t('404.home')}
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto"
            src={imgNotFound}
            alt="Not found image"
          />
        </div>
      </div>
    </section>
  );
};
