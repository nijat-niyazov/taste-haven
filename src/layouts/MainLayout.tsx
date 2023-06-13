import { Outlet } from 'react-router';
import { images } from '~/assets/images';
import Navbar from '~/components/header/navbar/Navbar';

const { dust } = images;

const MainLayout = () => {
  return (
    <div
      style={{
        backgroundImage: dust,
        zIndex: 20,
      }}
      className="h-screen overflow-x-hidden"
    >
      <header className="">
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default MainLayout;
