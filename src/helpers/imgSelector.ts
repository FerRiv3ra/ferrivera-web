export type imgNameType =
  | 'git'
  | 'react'
  | 'node'
  | 'typescript'
  | 'javascript'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'vsCode'
  | 'checkStudents'
  | 'theVineApp';

export const imgSelector = (imgName: imgNameType) => {
  const selector = {
    git: 'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/github_xtn3ym.png',
    react:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/react_v6ecru.png',
    node: 'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/nodejs_nau5nv.png',
    typescript:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/typescript_ujr1ni.png',
    javascript:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/javascript_ks3wca.png',
    vsCode:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/vs-code_v2llb1.png',
    github:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/github_xtn3ym.png',
    linkedin:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/linkedin_iqhcwi.png',
    twitter:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/twitter_vqmfkr.png',
    checkStudents:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546455/FerRivera%20Web/BannerApps/checkstudents_kuoabx.png',
    theVineApp:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546455/FerRivera%20Web/BannerApps/the-vine-app_lb57dr.png',
  };

  const title = {
    git: 'Git',
    react: 'React js and React Native',
    node: 'Node',
    typescript: 'Typescript',
    javascript: 'Javascript',
    vsCode: 'Visual Studio Code',
    github: 'https://github.com/FerRiv3ra',
    linkedin: 'https://www.linkedin.com/in/ferriv3ra/',
    twitter: 'https://twitter.com/FerRiv3ra',
    checkStudents: 'CheckStudents',
    theVineApp: 'The Vine Centre',
  };

  return {
    img: selector[imgName],
    title: title[imgName],
  };
};
