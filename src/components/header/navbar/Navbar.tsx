import { useEffect, useState } from 'react';
import SideBar from '../sidebar/SideBar';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const [prevScroll, setPrevScroll] = useState(0);

  // const [direction, setDirection] = useState('up');

  // useEffect(() => {
    
  //   const handleScroll = () => {
  //     console.log('scroll');
  //   };

  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // console.log('okay');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // const currentScroll = window.scrollY;

  //     // console.log(currentScroll);
  //     // if (currentScroll > 200) {
  //     //   if (currentScroll > prevScroll) {
  //     //     setDirection('down');
  //     //   } else {
  //     //     setDirection('up');
  //     //   }
  //     // }

  //     // setPrevScroll(currentScroll);
  //     console.log('scroll');
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };

  // console.log(direction);

  return (
    <nav
      // style={{
      //   top: direction === 'up' ? '0' : '-240px',
      // }}
      className="fixed top-0 z-20  flex w-full items-start justify-between p-6"
    >
      <div className="z-10 font-extrabold uppercase text-amber-500">
        <p className="inline-block p-0 text-[23px] leading-3 tracking-tighter">
          taste <br /> <span className="text-xl"> haven </span>
        </p>
        <h6 className="z-10 text-[7px] font-semibold tracking-widest">
          Eat * Drink * Play
        </h6>
      </div>

      <div className="flex gap-2 text-white">
        <button className="z-10 rounded-md bg-red-700 px-8 py-2 transition-all duration-500 sm:hover:scale-110">
          Reserve
        </button>

        <button
          onClick={handleShowMenu}
          className="z-10 grid w-10 gap-1 rounded-md bg-amber-500 px-3.5 py-3 transition-[transform] duration-500 active:bg-amber-600 sm:hover:scale-110"
        >
          <span className="h-[3px] bg-white"></span>
          <span className="h-[3px] bg-white"></span>
          <span className="h-[3px] bg-white"></span>
        </button>

        <SideBar showMenu={showMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
