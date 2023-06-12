import { FC } from 'react';

interface MenuElementProps {
  element: string;
  showMenu: boolean;
  index: number;
}

const MenuElement: FC<MenuElementProps> = ({ element, showMenu, index }) => {
  return (
    <li
      className={` ${
        showMenu ? '' : ''
      }  grid gap-1 text-center text-3xl font-extrabold uppercase text-[#eba13d]`}
    >
      <span
        style={{
          animationDelay: (index + 1) * 100 + 'ms',
        }}
        className={`text-sm text-white opacity-0  ${
          showMenu ? 'slide-in-right' : ''
        } `}
      >
        {index}
      </span>
      <span
        style={{
          animationDelay: (index + 1) * 70 + 'ms',
        }}
        className={`
          ${showMenu ? 'slide-in-left' : ''} opacity-0 `}
      >
        {element}
      </span>
    </li>
  );
};

export default MenuElement;
