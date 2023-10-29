import { Spinner } from '../components/Spinner';
import { ProjectFullDetails } from '../components/portfolio/ProjectFullDetails';
import { useProjectScreen } from '../hooks/useProjectScreen';

export const ProjectScreen = () => {
  const { relatedProjects, images } = useProjectScreen();

  return (
    <div className="px-4 pt-16 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      {!!relatedProjects.length ? (
        <ProjectFullDetails relatedProjects={relatedProjects} images={images} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
