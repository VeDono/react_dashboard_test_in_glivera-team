import { FC } from 'react';
import { SideMenu } from '../SideMenu';
import { WorkRealm } from '../WorkRealm';

import styles from './DashboardApp.module.scss';

export const DashboardApp: FC = () => {
  return (
    <section className={styles.dashboardApp}>
      <SideMenu />

      <WorkRealm />
    </section>
  );
};
