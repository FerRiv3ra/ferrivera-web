import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../context/AppContext';
import { imgNameType } from '../../types/portfolio';
import { Links } from './Links';
import { Logo } from './Logo';

export const Footer = () => {
  const logos: imgNameType[] = ['github', 'linkedin', 'twitter'];
  const { theme } = useAppContext();

  const { t } = useTranslation();

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4
              className={`text-3xl fonat-semibold ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              }`}
            >
              {t('footer.keepInTouch')}
            </h4>
            <h5
              className={`text-lg mt-0 mb-2 ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              }`}
            >
              {t('footer.findMe')}
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              {logos.map((logo, index) => (
                <Logo key={index} logoName={logo} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <Links />
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div
              className={`text-sm ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              } font-semibold py-1`}
            >
              {t('footer.copyright')} © <span id="get-current-year">2020</span>
              <Link
                to={'/'}
                className={`${
                  theme === 'light'
                    ? 'text-gray-800 hover:text-gray-600'
                    : 'text-gray-100 hover:text-gray-300'
                }`}
              >
                {' '}
                Fernando Rivera
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
