import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';
import { Project as ProjectType } from '../../types/portfolio';
import AppContext from '../../context/AppContext';
import { Technology } from './Technology';

interface Props {
  project: ProjectType;
}

export const Project = ({ project }: Props) => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(project.uid)}
      className={`p-4 md:w-1/3 sm:mb-0 text-left mb-6 rounded ${
        theme === 'light' ? 'hover:bg-cyan-100' : 'hover:bg-cyan-800'
      }`}
    >
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={project.bannerUrl}
        />
      </div>
      <h2
        className={`text-xl font-medium title-font ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        } mt-5`}
      >
        {project.name}
      </h2>
      <p className="text-base leading-relaxed mt-2">
        {i18n.language === 'es'
          ? project.description.es
          : project.description.en}
      </p>
      <p
        className={`${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        } text-lg my-2`}
      >
        {t('portfolio.technologies')}:
      </p>
      <div className="flex justify-between flex-wrap">
        {project.technologies.map((tech, index) => (
          <Technology tech={tech} key={index} />
        ))}
      </div>
      <div className="flex flex-col w-full gap-y-5 mt-5">
        {project.github && <Button type="github" url={project.github} />}
        {project.url && <Button type="url" url={project.url} />}
        {project.docsUrl && <Button type="docsUrl" url={project.docsUrl} />}
        {project.playstore && (
          <Button type="playstore" url={project.playstore} />
        )}
        {project.appstore && <Button type="appstore" url={project.appstore} />}
      </div>
    </button>
  );
};
