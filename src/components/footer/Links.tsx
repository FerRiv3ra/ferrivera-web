import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

export const Links = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  return (
    <div className="flex flex-wrap items-top mb-6">
      <div className="w-full lg:w-4/12 px-4 ml-auto">
        <span
          className={`block uppercase ${
            theme === 'light' ? 'text-gray-800' : 'text-gray-100'
          } text-sm font-semibold mb-2`}
        >
          {t('footer.usefulLinks')}
        </span>
        <ul className="list-unstyled">
          <li>
            <Link
              className={`${
                theme === 'light'
                  ? 'text-gray-800 hover:text-gray-600'
                  : 'text-gray-100 hover:text-gray-400'
              } font-semibold block pb-2 text-sm`}
              to="about-me"
            >
              {t('footer.aboutMe')}
            </Link>
          </li>

          <li>
            <Link
              className={`${
                theme === 'light'
                  ? 'text-gray-800 hover:text-gray-600'
                  : 'text-gray-100 hover:text-gray-400'
              } font-semibold block pb-2 text-sm`}
              to="https://github.com/FerRiv3ra"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <span
          className={`block uppercase ${
            theme === 'light' ? 'text-gray-800' : 'text-gray-100'
          } text-sm font-semibold mb-2`}
        >
          {t('footer.appsResources')}
        </span>
        <ul className="list-unstyled">
          <li>
            <Link
              className={`${
                theme === 'light'
                  ? 'text-gray-800 hover:text-gray-600'
                  : 'text-gray-100 hover:text-gray-400'
              } font-semibold block pb-2 text-sm`}
              to="account-deletion"
            >
              {t('footer.accountDeletion')}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                theme === 'light'
                  ? 'text-gray-800 hover:text-gray-600'
                  : 'text-gray-100 hover:text-gray-400'
              } font-semibold block pb-2 text-sm`}
              to="apps-privacy-policy"
            >
              {t('footer.privacyPolicy')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
