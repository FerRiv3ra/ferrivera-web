import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const PublicLayout = () => {
  return (
    <>
      <div className="bg-gray-100">
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
