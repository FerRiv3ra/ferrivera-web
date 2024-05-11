import { useAppContext } from '../../context/AppContext';
import { imgSelector } from '../../helpers/imgSelector';
import i18n from '../../translations/in18Config';
import { imgNameType } from '../../types/portfolio';

interface Props {
  logoName: imgNameType;
}

export const Tool = ({ logoName }: Props) => {
  const { img, title } = imgSelector(logoName);
  const { language } = i18n;
  const { theme } = useAppContext();

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
