import { imgNameType, imgSelector } from '../helpers/imgSelector';

interface Props {
  logoName: imgNameType;
}

export const Tool = ({ logoName }: Props) => {
  const { img, title } = imgSelector(logoName);

  return (
    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
      <img className="w-5 h-5 mx-3" src={img} />

      <span className="mx-3">{title}</span>
    </div>
  );
};
