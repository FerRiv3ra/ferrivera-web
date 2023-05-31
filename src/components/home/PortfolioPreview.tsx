import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PortfolioPreview = () => {
  const { t } = useTranslation();

  return (
    <Link
      className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
      to="portfolio"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-slate-400 via-blue-500 to-blue-950"></span>

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-slate-900">
            {t('home.portTitle')}
          </h5>
          <p className="mt-1 text-xs font-medium text-slate-600">
            {t('home.portBy')}
          </p>
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <img
            className="object-cover w-16 h-16 rounded-lg shadow-sm"
            src="https://res.cloudinary.com/fercloudinary/image/upload/v1685546396/FerRivera%20Web/profile_fh6l1u.jpg"
            alt="FerRivera profile picture"
          />
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-slate-500">{t('home.portDesc')}</p>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-slate-600">
            {t('home.portClick')}
          </dt>
        </div>
      </dl>
    </Link>
  );
};
