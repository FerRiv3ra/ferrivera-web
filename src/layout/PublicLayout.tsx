import { Outlet } from 'react-router-dom';

import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';

const PublicLayout = () => {
  return (
    <>
      <div className="bg-white">
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
