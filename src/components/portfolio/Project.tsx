import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../context/AppContext';
import { Project as ProjectType } from '../../types/portfolio';
import { Button } from './Button';
import { Technology } from './Technology';

interface Props {
  project: ProjectType;
}

export const Project = ({ project }: Props) => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppContext();
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
      <p className="text-base leading-relaxed mt-2 h-20">
        {i18n.language === 'es'
          ? `${project.description.es.slice(0, 125)}${
              project.description.es.length > 125 ? '...' : ''
            }`
          : `${project.description.en.slice(0, 125)}${
              project.description.en.length > 125 ? '...' : ''
            }`}
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
