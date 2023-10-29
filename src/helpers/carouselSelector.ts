import VC1 from '../assets/TheVineCentre/1.jpg';
import VC2 from '../assets/TheVineCentre/2.jpg';
import VC3 from '../assets/TheVineCentre/3.jpg';
import VC4 from '../assets/TheVineCentre/4.jpg';
import VC5 from '../assets/TheVineCentre/5.jpg';
import VC6 from '../assets/TheVineCentre/6.jpg';
import VC7 from '../assets/TheVineCentre/7.jpg';

import BL1 from '../assets/betterLists/1.png';
import BL2 from '../assets/betterLists/2.png';
import BL3 from '../assets/betterLists/3.png';
import BL4 from '../assets/betterLists/4.png';
import BL5 from '../assets/betterLists/5.png';

import CS1 from '../assets/checkStudents/1.png';
import CS2 from '../assets/checkStudents/2.png';
import CS3 from '../assets/checkStudents/3.png';
import CS4 from '../assets/checkStudents/4.png';
import CS5 from '../assets/checkStudents/5.png';
import CS6 from '../assets/checkStudents/6.png';
import CS7 from '../assets/checkStudents/7.png';
import CS8 from '../assets/checkStudents/8.png';

import IS1 from '../assets/iFootSchedule/1.jpg';
import IS2 from '../assets/iFootSchedule/2.jpg';
import IS3 from '../assets/iFootSchedule/3.jpg';
import IS4 from '../assets/iFootSchedule/4.jpg';
import IS5 from '../assets/iFootSchedule/5.jpg';

export type ImagesCollection =
  | 'vine'
  | 'betterlists'
  | 'checkstudents'
  | 'ifootschedule';

export const carouselSelector = (collection: ImagesCollection) => {
  let images = [];
  switch (collection) {
    case 'vine':
      images = [VC1, VC2, VC3, VC4, VC5, VC6, VC7];
      break;
    case 'betterlists':
      images = [BL1, BL2, BL3, BL4, BL5];
      break;
    case 'checkstudents':
      images = [CS1, CS2, CS3, CS4, CS5, CS6, CS7, CS8];
      break;
    case 'ifootschedule':
      images = [IS1, IS2, IS3, IS4, IS5];
  }

  return images;
};
