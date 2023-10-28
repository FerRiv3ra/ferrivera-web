import { useContext } from 'react';
import { imgNameType, imgSelector } from '../../helpers/imgSelector';
import AppContext from '../../context/AppContext';

interface Props {
  logoName: imgNameType;
}

export const Tool = ({ logoName }: Props) => {
  const { img, title } = imgSelector(logoName);
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`flex items-center ${
        theme === 'light' ? 'text-gray-800' : 'text-gray-100'
      } -px-3`}
    >
      <img className="w-5 h-5 mx-3" src={img} />

      <span className="mx-3">{title}</span>
    </div>
  );
};
