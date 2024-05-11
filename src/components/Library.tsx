import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

type Props = {
  libraryId: string;
};

export const Library = ({ libraryId }: Props) => {
  const { theme } = useAppContext();

  return (
    <Link
      className="mb-5"
      to={`https://github.com/FerRiv3ra/${libraryId}`}
      target="_blank"
    >
      <img
        loading="lazy"
        height="180em"
        src={`https://github-readme-stats.vercel.app/api/pin/?username=FerRiv3ra&repo=${libraryId}&show_owner=true&theme=${
          theme === 'dark' ? 'react' : 'default'
        }`}
      />
    </Link>
  );
};
