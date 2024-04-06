import { FC } from 'react';

import userAvatar from '../../images/userAvatar/userAvatar.png';

import styles from './SideMenuUser.module.scss';

export const SideMenuUser: FC = () => {
  return (
    <article className={styles.sideMenuUser}>
      <img
        className={styles.sideMenuUser_avatarImg}
        src={userAvatar}
        alt="user avatar"
      />
      <div className={styles.sideMenuUser_userInfo}>
        <p className={styles['sideMenuUser_userInfo-name']}>Evano</p>
        <p className={styles['sideMenuUser_userInfo-position']}>
          Project Manager
        </p>
      </div>
    </article>
  );
};
