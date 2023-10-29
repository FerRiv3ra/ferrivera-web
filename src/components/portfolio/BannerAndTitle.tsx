import { useContext } from 'react';
import AppContext from '../../context/AppContext';

interface Props {
  imageSrc: string;
  description: string;
}

export const BannerAndTitle = ({ imageSrc, description }: Props) => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <img src={imageSrc} className="h-full w-8/12 mx-auto mb-6" />
      <h2
        className={`${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        } font-medium title-font text-lg mb-5`}
      >
        {description}
      </h2>
    </>
  );
};
