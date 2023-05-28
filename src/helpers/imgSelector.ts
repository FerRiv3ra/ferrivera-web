import git from '../assets/logos/git.png';
import react from '../assets/logos/react.png';
import node from '../assets/logos/nodejs.png';
import typescript from '../assets/logos/typescript.png';
import javascript from '../assets/logos/javascript.png';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';
import twitter from '../assets/logos/twitter.png';
import vsCode from '../assets/logos/vs-code.png';
import checkStudents from '../assets/apps/checkstudents.png';
import theVineApp from '../assets/apps/the-vine-app.png';

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
    git,
    react,
    node,
    typescript,
    javascript,
    vsCode,
    github,
    linkedin,
    twitter,
    checkStudents,
    theVineApp,
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
