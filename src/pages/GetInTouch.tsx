import { useEffect } from 'react';

import { StyledTitle } from '../components/StyledTitle';
import { ContactButton } from '../components/contact-me/ContactButton';
import { useAppContext } from '../context/AppContext';
import { socialMediaType } from '../hooks/useContact';

export const GetInTouch = () => {
  const { theme } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialMedia: socialMediaType[] = [
    'github',
    'linkedin',
    'twitter',
    'email',
    'resume',
  ];

  return (
    <div className="mt-12 lg:mt-10">
      <div
        className={`${
          theme === 'light' ? 'bg-white' : 'bg-gray-700'
        } pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20`}
      >
        <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between"></div>
            <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
              <StyledTitle initial="Contact me" />
              <div className="pt--10 pr-0 pb-10 pl-0">
                {socialMedia.map((social) => (
                  <ContactButton key={social} socialMedia={social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
