import { FC } from 'react';
import { SideMenuCategory } from '../SideMenuCategory';

export const SideMenuList: FC = () => {
  return (
    <div>
      <SideMenuCategory />
      <SideMenuCategory />
      <SideMenuCategory />
    </div>
  );
};
