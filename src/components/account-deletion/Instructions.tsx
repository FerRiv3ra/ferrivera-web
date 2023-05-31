import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ImageInstructions } from './ImageInstructions';
import { useBannerSelector } from '../../hooks/useIconSelector';

export type appIdType = {
  appId: string;
};

export const Instructions = ({ appId }: appIdType) => {
  const theVineAppImg = useBannerSelector('TheVineApp');
  const checkStudentsImg = useBannerSelector('checkStudents');

  const { t } = useTranslation();

  const items = ['i1', 'i2', 'i3'];

  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="h-20 w-20 border-2 rounded-md"
          src={appId === 'theVineApp' ? theVineAppImg : checkStudentsImg}
        />
      </div>
      <p className="text-lg font-semibold uppercase text-slate-600 my-5 ">
        {t(`${appId}.instructions`)}
      </p>
      <p>{t(`${appId}.desc`)}</p>
      {appId === 'checkStudents' && <ImageInstructions appId={appId} />}
      <p className="text-lg font-semibold uppercase text-slate-600 my-5 ">
        {t(`${appId}.retainedOrDeletedData`)}
      </p>
      <p>{t(`${appId}.retainedOrDeletedDataMsg`)}</p>

      {appId === 'theVineApp' ? (
        <p className="mt-5 text-center">
          <Link
            className="cursor-pointer text-slate-500 hover:text-blue-900 text-center"
            to="https://www.thevinecentre.org.uk/_files/ugd/ecd900_e683427e59b147ec8c033c03300c3ccc.pdf"
            target="_blank"
          >
            {t(`${appId}.link`)}
          </Link>
        </p>
      ) : (
        <div>
          <ul className="list-disc">
            {items.map((item) => (
              <li key={item} className="ml-5">
                {t(`${appId}.${item}`)}
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold uppercase text-slate-600 my-5 ">
            {t(`${appId}.retained`)}
          </p>
          <p>{t(`${appId}.retainedMsg`)}</p>
        </div>
      )}
    </div>
  );
};
