import { Link } from 'react-router-dom';

import { imgNameType, imgSelector } from '../../helpers/imgSelector';

interface Props {
  logoName: imgNameType;
}

export const Logo = ({ logoName }: Props) => {
  const { img, title } = imgSelector(logoName);

  return (
    <Link
      to={title}
      target="_blank"
      className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
      type="button"
    >
      <img src={img} alt={logoName} className="p-2" />
    </Link>
  );
};
