import { FC } from 'react';

import { CompanyLogo } from '../CompanyLogo';

import styles from './SideMenu.module.scss';
import { SideMenuList } from '../SideMenuList';

export const SideMenu: FC = () => {
  return (
    <div className={styles.sideMenu}>
      <CompanyLogo />
      <SideMenuList />
    </div>
  );
};
