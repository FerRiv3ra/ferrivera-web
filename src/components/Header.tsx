import { PersonalInfo } from './PersonalInfo';
import { HeaderNavigation } from './HeaderNavigation';

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
      <HeaderNavigation />

      <PersonalInfo />
    </header>
  );
};
