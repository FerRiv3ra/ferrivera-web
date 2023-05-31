export const useBannerSelector = (type: 'TheVineApp' | 'checkStudents') => {
  const imgUrl =
    type === 'checkStudents'
      ? 'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/checkStudents_kfca66.png'
      : 'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/theVineApp_m3tng5.png';

  return imgUrl;
};
