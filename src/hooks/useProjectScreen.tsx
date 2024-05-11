import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import {
  ImagesCollection,
  carouselSelector,
} from '../helpers/carouselSelector';
import { sortProyects } from '../helpers/sortProyects';
import { Project } from '../types/portfolio';

export const useProjectScreen = () => {
  const [project, setProject] = useState<Project>();
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const { projectId } = useParams();
  const { getProject, getRelatedProjects, projects } = useAppContext();

  const keyword = project?.name.toLowerCase().startsWith('the')
    ? project.name.toLowerCase().split(' ')[1]
    : project?.name.toLowerCase().split(' ')[0] ?? '';

  const images = carouselSelector(keyword as ImagesCollection);

  useEffect(() => {
    setProject(getProject(projectId!));
  }, [projects]);

  useEffect(() => {
    if (!!projects.length) {
      const related = getRelatedProjects(projectId!);
      const sorted = sortProyects(related);

      setRelatedProjects(sorted);
    }
  }, [projects]);

  return {
    relatedProjects,
    images,
  };
};
