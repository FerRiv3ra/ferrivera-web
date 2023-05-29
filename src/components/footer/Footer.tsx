import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Logo } from './Logo';
import { imgNameType } from '../../helpers/imgSelector';
import { Links } from './Links';

export const Footer = () => {
  const logos: imgNameType[] = ['github', 'linkedin', 'twitter'];

  const { t } = useTranslation();

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              {t('footer.keepInTouch')}
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
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
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              {t('footer.copyright')} ©{' '}
              <span id="get-current-year">{new Date().getFullYear()}</span>
              <Link
                to={'/'}
                className="text-blueGray-500 hover:text-blueGray-800"
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
