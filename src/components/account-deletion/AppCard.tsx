import { useTranslation } from 'react-i18next';
import { imgNameType, imgSelector } from '../../helpers/imgSelector';
import { Link } from 'react-router-dom';

interface Props {
  appTitle: imgNameType;
}

export const AppCard = ({ appTitle }: Props) => {
  const { img, title } = imgSelector(appTitle);

  const { t } = useTranslation();

  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={img}
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {title}
      </h2>
      <Link
        to={`${appTitle}`}
        className="mx-auto mt-6 text-white bg-blue-950 border-0 py-2 px-5 focus:outline-none hover:bg-blue-900 rounded"
      >
        {t('deletion.seeInstructions')}
      </Link>
    </div>
  );
};
