import { Outlet } from 'react-router-dom';

import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const PublicLayout = () => {
  const { theme } = useContext(AppContext);
  return (
    <>
      <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
        <Header />

        <div className="md:flex">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
