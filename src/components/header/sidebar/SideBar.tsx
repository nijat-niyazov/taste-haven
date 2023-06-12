import { FC } from 'react';
import { menuElements } from '~/assets/menuelements';
import MenuElement from './MenuElement';

type SideBarProps = {
  showMenu: boolean;
};

const SideBar: FC<SideBarProps> = ({ showMenu }) => {
  return (
    <ul
      className={`bg-[#235c47] w-full top-0 absolute h-screen transition-all flex flex-col items-center justify-center gap-14 duration-500 py-40 ${
        showMenu ? 'left-0' : 'left-full'
      }`}
    >
      {menuElements.map((element, i) => (
        <MenuElement showMenu={showMenu} key={i} element={element} index={i} />
      ))}
    </ul>
  );
};

export default SideBar;
