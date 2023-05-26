import { Tool } from './Tool';
import { imgNameType } from '../helpers/imgSelector';
import mainPhoto from '../assets/mainPhoto.jpg';

export const PersonalInfo = () => {
  const tools: imgNameType[] = [
    'git',
    'react',
    'node',
    'typescript',
    'javascript',
    'vsCode',
  ];

  return (
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
            Fullstack mobile developer
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I am a highly skilled React Native and Node developer, here is my
            toolkit.
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <Tool key={index} logoName={tool} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src={mainPhoto}
          alt="glasses photo"
        />
      </div>
    </div>
  );
};
