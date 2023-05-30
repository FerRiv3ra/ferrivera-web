export type projectIdType = 'appMovil' | 'backend' | 'web';

export interface projectType {
  id: string;
  name: string;
  technologies: string[];
}

interface portfolioType {
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
        technologies: [
          'React Native',
          'JavaScript',
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
