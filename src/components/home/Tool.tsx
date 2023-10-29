import { useContext } from 'react';
import { imgSelector } from '../../helpers/imgSelector';
import { imgNameType } from '../../types/portfolio';
import AppContext from '../../context/AppContext';
import i18n from '../../translations/in18Config';

interface Props {
  logoName: imgNameType;
}

export const Tool = ({ logoName }: Props) => {
  const { img, title } = imgSelector(logoName);
  const { language } = i18n;
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`flex items-center ${
        theme === 'light' ? 'text-gray-800' : 'text-gray-100'
      } -px-3`}
    >
      <img className="w-5 h-5 mx-3" src={img} />

      <span className="mx-3">
        {language === 'en' ? title : title.replace('and', 'y')}
      </span>
    </div>
  );
};
