import { Outlet } from 'react-router';
import { images } from '~/assets/images';
import Navbar from '~/components/header/navbar/Navbar';

const { dust } = images;
console.log(dust);

const MainLayout = () => {
  return (
    <div className="">
      <div
        // style={{
        //   backgroundImage: dust,
        // }}
        className="h-screen overflow-x-hidden bg-blue-500"
      >
        <header className="">
          <Navbar />
          {/* <ScrollSVG /> */}
        </header>

        <main>
          <Outlet />
        </main>

        <footer></footer>
      </div>
    </div>
  );
};

export default MainLayout;
