import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../context/AppContext';

interface Props {
  isOpen: boolean;
}

export const DesktopMenu = ({ isOpen }: Props) => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const { toggleLanguage, theme, toggleTheme } = useAppContext();

  return (
    <div
      className={`${
        isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
      } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out ${
        theme === 'light' ? 'bg-white' : 'bg-gray-800'
      } shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
    >
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
        <div className="flex justify-center items-center">
          <button
            className="block font-medium lg:mx-2 p-2 mx-2"
            onClick={toggleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={`${
                theme === 'dark'
                  ? 'h-6 w-6 stroke-gray-100 hover:fill-yellow-500 hover:stroke-yellow-500'
                  : 'h-5 w-5 stroke-gray-700 hover:fill-gray-700'
              }`}
            >
              {theme === 'light' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              )}
            </svg>
          </button>

          <button
            className="block font-medium lg:mx-2 p-2 mx-2"
            onClick={toggleLanguage}
          >
            {currentLang === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>
        </div>
        <Link
          className={`block font-medium ${
            theme === 'light'
              ? 'text-gray-700 hover:text-gray-900'
              : 'text-gray-100 hover:text-white'
          } lg:mx-8 hover:underline text-center`}
          to="/"
        >
          {t('header.home')}
        </Link>

        <Link
          className={`block font-medium ${
            theme === 'light'
              ? 'text-gray-700 hover:text-gray-900'
              : 'text-gray-100 hover:text-white'
          } lg:mx-8 hover:underline text-center`}
          to="portfolio"
        >
          {t('header.portfolio')}
        </Link>

        <Link
          to="get-in-touch"
          className={`flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center ${
            theme === 'light'
              ? 'text-white bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'
              : 'text-gray-700 bg-gray-100 hover:bg-white focus:bg-white'
          } capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none `}
        >
          {t('header.getInTouch')}
        </Link>
      </div>
    </div>
  );
};
