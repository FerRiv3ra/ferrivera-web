import git from '../assets/logos/git.png';
import react from '../assets/logos/react.png';
import node from '../assets/logos/nodejs.png';
import typescript from '../assets/logos/typescript.png';
import javascript from '../assets/logos/javascript.png';
import vsCode from '../assets/logos/vs-code.png';

export type imgNameType =
  | 'git'
  | 'react'
  | 'node'
  | 'typescript'
  | 'javascript'
  | 'vsCode';

export const imgSelector = (imgName: imgNameType) => {
  const selector = {
    git,
    react,
    node,
    typescript,
    javascript,
    vsCode,
  };

  const title = {
    git: 'Git',
    react: 'React js and React Native',
    node: 'Node',
    typescript: 'Typescript',
    javascript: 'Javascript',
    vsCode: 'Visual Studio Code',
  };

  return {
    img: selector[imgName],
    title: title[imgName],
  };
};
