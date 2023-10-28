import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const Spinner = () => {
  const { theme } = useContext(AppContext);
  return (
    <div className="p-20 mt-20 flex flex-1 items-center justify-center">
      <div
        className={`w-12 h-12 border-8 ${
          theme === 'light' ? 'border-gray-800' : 'border-gray-100'
        } rounded-full loader`}
      ></div>
    </div>
  );
};
