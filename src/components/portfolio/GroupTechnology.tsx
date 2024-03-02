import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { projectIdType } from '../../types/portfolio';
import { Project } from './Project';

interface Props {
  groupProject: projectIdType;
}

export const GroupTechnology = ({ groupProject }: Props) => {
  const { t } = useTranslation();
  const { projects, theme } = useContext(AppContext);

  return (
    <section
      className={`${
        theme === 'light' ? 'text-gray-600' : 'text-gray-100'
      } pb-16 lg:pb-20 body-font`}
    >
      <div className="container px-5 mx-auto">
        <div className="flex flex-col">
          <div
            className={`h-1 ${
              theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
            } rounded overflow-hidden`}
          >
            <div
              className={`w-24 h-full ${
                theme === 'light' ? 'bg-blue-950' : 'bg-cyan-600'
              }`}
            ></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h2
              className={`sm:w-2/5 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              } font-medium title-font text-2xl mb-2 sm:mb-0`}
            >
              {t(`portfolio.${groupProject}`)}
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap items-start sm:-m-4 -mx-4 -mb-10 -mt-4">
          {projects.map((project) => {
            if (project.category === groupProject)
              return <Project project={project} key={project.uid} />;
          })}
        </div>
      </div>
    </section>
  );
};
