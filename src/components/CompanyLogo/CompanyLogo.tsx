import { FC } from 'react';

import companyLogo from '../../images/logo/logo.svg';

import styles from './CompanyLogo.module.scss';

export const CompanyLogo: FC = () => {
  return (
    <article className={styles.companyLogo}>
      <img src={companyLogo} alt="logo of company" />

      <span className={styles.companyLogo_version}>v.01</span>
    </article>
  );
};
