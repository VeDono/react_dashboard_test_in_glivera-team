import { FC, ReactNode } from 'react';

import styles from './SideMenuCategory.module.scss';

interface Props {
  children: ReactNode;
}

export const SideMenuCategory: FC<Props> = ({ children }) => {
  return <article className={styles.sideMenuCategory}>{children}</article>;
};
