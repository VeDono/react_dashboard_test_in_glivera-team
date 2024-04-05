import { FC } from 'react';

import styles from './SideMenuCategory.module.scss';

import keyIcon from '../../images/icons/key-square.svg';

export const SideMenuCategory: FC = () => {
  return (
    <article className={styles.sideMenuCategory}>
      <img src={keyIcon} alt="keyIcon" />
    </article>
  );
};
