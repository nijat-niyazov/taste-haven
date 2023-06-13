import { FC } from 'react';
import { menuElements } from '~/assets/menuelements';
import MenuElement from './MenuElement';

type SideBarProps = {
  showMenu: boolean;
};

const SideBar: FC<SideBarProps> = ({ showMenu }) => {
  return (
    <ul
      style={{
        left: showMenu ? '0' : '100%',
      }}
      className="absolute top-0 flex h-screen w-full flex-col items-center justify-center gap-14 bg-[#235c47] py-40 transition-all duration-500"
    >
      {menuElements.map((element, i) => (
        <MenuElement showMenu={showMenu} key={i} element={element} index={i} />
      ))}
    </ul>
  );
};

export default SideBar;
