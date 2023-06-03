type projectIdType = 'appMovil' | 'backend' | 'web';
export type projectNameType =
  | 'theVineApp'
  | 'iFootSchedule'
  | 'checkStudents'
  | 'betterLists'
  | 'theVineBackend'
  | 'checkStudentsBackend'
  | 'merakiBackend'
  | 'eCommerceBootCamp'
  | 'theVineManager'
  | 'merakiWeb'
  | 'ferriveraWeb';

export interface projectType {
  id: projectNameType;
  name: string;
  url?: string;
  docsUrl?: string;
  github?: string;
  playstore?: string;
  appstore?: string;
  technologies: string[];
}

export interface portfolioType {
  id: projectIdType;
  projects: projectType[];
}

export const portfolioData: portfolioType[] = [
  {
    id: 'appMovil',
    projects: [
      {
        id: 'theVineApp',
        name: 'The Vine Centre',
        github: 'https://github.com/FerRiv3ra/cupboard',
        playstore:
          'https://play.google.com/store/apps/details?id=com.ferrivera.vinecentre',
        appstore: 'https://apps.apple.com/us/app/the-vine-centre/id1628162118',
        technologies: [
          'React Native',
          'JavaScript',
          'Axios',
          'FontAwesome',
          'React Navigation',
          'React Native Camera Kit',
          'React Native Gesture Handler',
        ],
      },
      {
        id: 'iFootSchedule',
        name: 'iFootSchedule',
        github: 'https://github.com/FerRiv3ra/iFootSchedule',
        playstore:
          'https://play.google.com/store/apps/details?id=com.ferrivera.ifootschedule',
        appstore: 'https://apps.apple.com/us/app/ifootschedule/id1637489532',
        technologies: [
          'React Native',
          'JavaScript',
          'Realm DB',
          'React i18next',
          'FontAwesome',
          'React Navigation',
        ],
      },
      {
        id: 'checkStudents',
        name: 'CheckStudents',
        playstore:
          'https://play.google.com/store/apps/details?id=com.ferrivera.checkstudents',
        appstore: 'https://apps.apple.com/us/app/checkstudents/id6443751412',
        technologies: [
          'React Native',
          'TypeScript',
          'Axios',
          'FontAwesome',
          'React Navigation',
          'React i18next',
          'React Native Camera Kit',
          'React Native Gesture Handler',
        ],
      },
      {
        id: 'betterLists',
        name: 'BetterLists',
        playstore:
          'https://play.google.com/store/apps/details?id=com.ferrivera.betterlists',
        technologies: [
          'React Native',
          'TypeScript',
          'Realm DB',
          'React Native Vector Icons',
          'React Navigation',
          'React i18next',
          'React Native Gesture Handler',
        ],
      },
    ],
  },
  {
    id: 'backend',
    projects: [
      {
        id: 'theVineBackend',
        name: 'The Vine Server',
        github: 'https://github.com/FerRiv3ra/grub_hub_backend',
        docsUrl: 'https://documenter.getpostman.com/view/11178258/2s93mAUfh3',
        technologies: [
          'Node JS',
          'JavaScript',
          'Express',
          'Mongo DB',
          'Mongoose',
          'JSON Web Token',
          'PDF Kit',
          'Excel JS',
        ],
      },
      {
        id: 'checkStudentsBackend',
        name: 'CheckStudents Server',
        docsUrl: 'https://documenter.getpostman.com/view/11178258/2s93mAUfmV',
        technologies: [
          'Node JS',
          'JavaScript',
          'Express',
          'Mongo DB',
          'Mongoose',
          'JSON Web Token',
          'Excel JS',
        ],
      },
      {
        id: 'merakiBackend',
        name: 'Cuidados Meraki Server',
        docsUrl: 'https://documenter.getpostman.com/view/11178258/2s93mAUzZf',
        technologies: [
          'Node JS',
          'JavaScript',
          'Express',
          'Mongo DB',
          'Mongoose',
          'JSON Web Token',
        ],
      },
      {
        id: 'eCommerceBootCamp',
        name: 'eCommerce BootCamp',
        github: 'https://github.com/FerRiv3ra/eCommerce-bootcamp',
        docsUrl: 'https://documenter.getpostman.com/view/11178258/UzBnqS74',
        technologies: [
          'Node JS',
          'TypeScript',
          'Express',
          'Mongo DB',
          'Mongoose',
          'JSON Web Token',
          'Google Auth Library',
          'Stripe',
        ],
      },
    ],
  },
  {
    id: 'web',
    projects: [
      {
        id: 'theVineManager',
        name: 'The Vine Centre Manager',
        github: 'https://github.com/FerRiv3ra/vine-manager',
        url: 'https://leafy-narwhal-ed4bdb.netlify.app/',
        technologies: [
          'React JS',
          'JavaScript',
          'React Router Dom',
          'Tailwind CSS',
          'Axios',
        ],
      },
      {
        id: 'merakiWeb',
        name: 'Cuidados Meraki',
        url: 'https://www.cuidadosmeraki.com/',
        technologies: [
          'React JS',
          'JavaScript',
          'React Router Dom',
          'Tailwind CSS',
          'Axios',
        ],
      },
      {
        id: 'ferriveraWeb',
        name: 'Fernando Rivera Web',
        github: 'https://github.com/FerRiv3ra/ferrivera-web',
        url: 'https://feriv3ra.netlify.app/',
        technologies: [
          'React JS',
          'TypeScript',
          'React Router Dom',
          'Tailwind CSS',
        ],
      },
    ],
  },
];
