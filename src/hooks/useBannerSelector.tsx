import { projectNameType } from '../data/portfolioData';

export const useBannerSelector = (type: projectNameType) => {
  let imgUrl = {
    theVineApp:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546455/FerRivera%20Web/BannerApps/the-vine-app_lb57dr.png',
    iFootSchedule:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/iFootSchedule_hfi2yi.png',
    checkStudents:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685546455/FerRivera%20Web/BannerApps/checkstudents_kuoabx.png',
    betterLists:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/BetterLists_ipu0go.png',
    theVineBackend:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/backend_auqz1h.png',
    checkStudentsBackend:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/backend_auqz1h.png',
    merakiBackend:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/backend_auqz1h.png',
    eCommerceBootCamp:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/backend_auqz1h.png',
    theVineManager:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/VineManager_biwcvd.png',
    merakiWeb:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/meraki_hxpssp.png',
    ferriveraWeb:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1685550898/FerRivera%20Web/BannerApps/ferweb_ulem6m.png',
  };

  return imgUrl[type];
};
