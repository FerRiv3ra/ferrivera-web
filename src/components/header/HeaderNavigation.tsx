import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import frLogo from '../../assets/FRLogo2.png';

export const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b fixed w-full bg-white top-0 z-50">
      <div className="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-auto h-6 sm:h-8" src={frLogo} alt="" />
          </Link>

          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <DesktopMenu isOpen={isOpen} />
      </div>
    </nav>
  );
};
