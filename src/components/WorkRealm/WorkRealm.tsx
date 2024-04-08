import { FC } from 'react';

import styles from './WorkRealm.module.scss';
import { CustomerDataTable } from '../CustomerDataTable';

export const WorkRealm: FC = () => {
  return (
    <section className={styles.workRealm}>
      <h1 className={styles.workRealm_userName}>Hello Evano 👋🏼,</h1>

      <CustomerDataTable />
    </section>
  );
};
