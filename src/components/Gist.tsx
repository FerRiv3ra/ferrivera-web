import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

type Props = {
  gistId: string;
};

export const Gist = ({ gistId }: Props) => {
  const { theme } = useAppContext();

  return (
    <Link
      className="mb-5"
      to={`https://gist.github.com/FerRiv3ra/${gistId}`}
      target="_blank"
    >
      <img
        loading="lazy"
        height="180em"
        src={`https://github-readme-stats.vercel.app/api/gist?id=${gistId}&show_owner=true&theme=${
          theme === 'dark' ? 'react' : 'default'
        }`}
      />
    </Link>
  );
};
