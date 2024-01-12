import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AppContext from '../context/AppContext';
import { UsefulGists } from './UsefulGists';

export const GithubStats = () => {
  const { theme } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <>
      <h2
        className={`text-xl font-semibold text-center mb-5 tracking-wide ${
          theme === 'light' ? 'text-gray-800' : 'text-gray-200'
        } lg:text-4xl`}
      >
        {t('home.githubStats')}
      </h2>
      <div className="flex justify-center gap-5 mb-10 flex-wrap">
        <Link to="https://github.com/FerRiv3ra" target="_blank">
          <img
            loading="lazy"
            height="180em"
            src={`https://github-readme-stats-eight-theta.vercel.app/api?username=FerRiv3ra&show_icons=true&theme=${
              theme === 'dark' ? 'react' : 'default'
            }&include_all_commits=true&count_private=true`}
          />
        </Link>

        <Link to="https://github.com/FerRiv3ra" target="_blank">
          <img
            loading="lazy"
            height="180em"
            src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=FerRiv3ra&layout=compact&langs_count=8&theme=${
              theme === 'dark' ? 'react' : 'default'
            }`}
          />
        </Link>
      </div>
      <h2
        className={`text-xl font-semibold text-center mb-5 tracking-wide ${
          theme === 'light' ? 'text-gray-800' : 'text-gray-200'
        } lg:text-4xl`}
      >
        {t('home.usefulGists')}
      </h2>
      <UsefulGists />
    </>
  );
};
