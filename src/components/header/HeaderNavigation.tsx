import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useAppContext } from '../../context/AppContext';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useAppContext();

  return (
    <nav
      className={`border-b fixed ${
        theme === 'light' ? 'bg-white' : 'bg-gray-800'
      } w-full  top-0 z-50`}
    >
      <div className="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="w-auto h-6 sm:h-8"
              src="https://res.cloudinary.com/fercloudinary/image/upload/v1685546396/FerRivera%20Web/FRLogo2_enoe4d.png"
              alt=""
            />
          </Link>

          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <DesktopMenu isOpen={isOpen} />
      </div>
    </nav>
  );
};
