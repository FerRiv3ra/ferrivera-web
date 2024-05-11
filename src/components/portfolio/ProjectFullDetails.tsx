import i18n from '../../translations/in18Config';
import { Project } from '../../types/portfolio';
import { StyledTitle } from '../StyledTitle';
import { BannerAndTitle } from './BannerAndTitle';
import { RelatedProjects } from './RelatedProjects';
import { Screenshots } from './Screenshots';

interface Props {
  relatedProjects: Project[];
  images: string[];
}

export const ProjectFullDetails = ({ relatedProjects, images }: Props) => {
  const { language } = i18n;

  return (
    <>
      <StyledTitle initial={relatedProjects[0].name} />
      <BannerAndTitle
        imageSrc={relatedProjects[0].bannerUrl}
        description={
          language === 'en'
            ? relatedProjects[0].description.en
            : relatedProjects[0].description.es
        }
      />
      {!!images.length && <Screenshots images={images} />}
      {relatedProjects.map((project, index) => (
        <RelatedProjects project={project} key={index} />
      ))}
    </>
  );
};
