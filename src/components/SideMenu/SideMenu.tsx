import { FC } from 'react';

import { CompanyLogo } from '../CompanyLogo';

import styles from './SideMenu.module.scss';
import { SideMenuList } from '../SideMenuList';
import { SideMenuUser } from '../SideMenuUser';

export const SideMenu: FC = () => {
  return (
    <div className={styles.sideMenu}>
      <CompanyLogo />
      <SideMenuList />
      <SideMenuUser />
    </div>
  );
};
