import url from '../assets/svg/world-svgrepo-com.svg';
import docsUrl from '../assets/svg/postman-svgrepo-com.svg';
import github from '../assets/svg/github-142-svgrepo-com.svg';
import playstore from '../assets/svg/googleplay-svgrepo-com.svg';
import appstore from '../assets/svg/logo-apple-appstore-svgrepo-com.svg';

export type svgType = 'url' | 'docsUrl' | 'github' | 'playstore' | 'appstore';

export const svgSelector = (type: svgType) => {
  const selector = {
    url,
    docsUrl,
    github,
    playstore,
    appstore,
  };

  return selector[type];
};
