import { SECTIONS } from '../../helpers/imgInstructions';
import i18n from '../../translations/in18Config';

interface Props {
  appId: string;
}

export const ImageInstructions = ({ appId }: Props) => {
  const { language } = i18n;
  const images = ['img1', 'img2', 'img3', 'img4'];

  // TODO: Arreglar tipado

  return (
    <div className="flex justify-around my-5">
      {images.map((img) => (
        <img className="w-1/6" src={SECTIONS[appId][language][img]} />
      ))}
    </div>
  );
};
