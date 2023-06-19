import { useTranslation } from 'react-i18next';

import { Button } from './Button';
import { Project as ProjectType } from '../../types/portfolio';

interface Props {
  project: ProjectType;
}

export const Project = ({ project }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={project.bannerUrl}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {project.name}
      </h2>
      <p className="text-base leading-relaxed mt-2">
        {t(`projectDescription.${project.textId}`)}
      </p>
      <p className="text-gray-900 text-lg my-2">
        {t('portfolio.technologies')}:
      </p>
      <ul className="list-disc ml-5">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="flex flex-col w-full gap-y-5 mt-5">
        {project.github && <Button type="github" url={project.github} />}
        {project.url && <Button type="url" url={project.url} />}
        {project.docsUrl && <Button type="docsUrl" url={project.docsUrl} />}
        {project.playstore && (
          <Button type="playstore" url={project.playstore} />
        )}
        {project.appstore && <Button type="appstore" url={project.appstore} />}
      </div>
    </div>
  );
};
