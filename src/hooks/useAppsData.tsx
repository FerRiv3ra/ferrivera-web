export interface appsDataType {
  id: string;
  title: string;
}

export const useAppsData = (id: string) => {
  const appsData: appsDataType[] = [
    {
      id: 'theVineApp',
      title: 'The Vine Centre App',
    },
    {
      id: 'checkStudents',
      title: 'CheckStudents',
    },
  ];

  const data: appsDataType | undefined = appsData.filter(
    (app) => app.id === id
  )[0];

  return {
    data,
  };
};
