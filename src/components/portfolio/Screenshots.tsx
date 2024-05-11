import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';
import { Carousel } from './Carousel';

interface Props {
  images: string[];
}

export const Screenshots = ({ images }: Props) => {
  const { theme } = useAppContext();
  const { t } = useTranslation();

  return (
    <>
      <h2
        className={`${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        } title-font text-2xl text-center font-semibold my-5`}
      >
        {`${t('portfolio.technologies')}`} ({t('portfolio.screenshots')})
      </h2>
      <div className="flex justify-center">
        <Carousel images={images} />
      </div>
    </>
  );
};
