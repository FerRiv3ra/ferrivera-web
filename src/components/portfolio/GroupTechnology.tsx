import { useTranslation } from 'react-i18next';

import { Project } from './Project';
import { projectIdType } from '../../types/portfolio';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

interface Props {
  groupProject: projectIdType;
}

export const GroupTechnology = ({ groupProject }: Props) => {
  const { t } = useTranslation();
  const { projects } = useContext(AppContext);

  return (
    <section className="text-gray-600 pb-16 lg:pb-20 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-blue-950"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              {t(`portfolio.${groupProject}`)}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {projects.map((project) => {
            if (project.category === groupProject)
              return <Project project={project} key={project.uid} />;
          })}
        </div>
      </div>
    </section>
  );
};
