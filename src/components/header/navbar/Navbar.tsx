import { useEffect, useState } from 'react';
import SideBar from '../sidebar/SideBar';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [prevScroll, setPrevScroll] = useState(0);

  const [direction, setDirection] = useState('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 200) {
        if (currentScroll > prevScroll) {
          setDirection('down');
        } else {
          setDirection('up');
        }
      }

      setPrevScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScroll]);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };

  console.log(showMenu);

  return (
    <nav className="relative flex w-full items-center justify-between p-6">
      <div className="grid gap-1 uppercase">
        <h2 className="z-10">taste haven</h2>
        <h6 className="z-10">Eat * Drink * Play</h6>
      </div>

      <div className="flex gap-2 text-white">
        
        <button className="z-10 rounded-md bg-red-700 px-8 py-2 transition-all duration-500 sm:hover:scale-110">
          Reserve
        </button>

        <button
          onClick={handleShowMenu}
          className="z-10 grid w-10 gap-1 rounded-md bg-amber-500 px-3.5 py-3 transition-[transform] duration-500 sm:hover:scale-110 active:bg-amber-600"
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
