import { Link } from 'react-router-dom';
import { imgSelector } from '../../helpers/imgSelector';
import { imgNameType } from '../../types/portfolio';

interface Props {
  logoName: imgNameType;
}

export const Logo = ({ logoName }: Props) => {
  const { img, title } = imgSelector(logoName);

  return (
    <Link
      to={title}
      target="_blank"
      className="bg-white shadow-lg h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
      type="button"
    >
      <img src={img} alt={logoName} className="p-2 h-10 w-10" />
    </Link>
  );
};
