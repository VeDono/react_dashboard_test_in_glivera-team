import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { CompanyLogo } from '../CompanyLogo';

import styles from './SideMenu.module.scss';
import { SideMenuList } from '../SideMenuList';
import { SideMenuUser } from '../SideMenuUser';
// eslint-disable-next-line max-len
import { ReactComponent as RightArrowIcon } from '../../images/icons/chevron-right-dark.svg';

export const SideMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current?.contains(event.target as Node)) {
      return;
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={ref}
      className={cn(styles.sideMenu, {
        [styles['sideMenu--opened']]: isMenuOpen,
      })}
    >
      <CompanyLogo />

      <button
        type="button"
        aria-label="switch-btn"
        onClick={() => setIsMenuOpen((isMenuOpenCurrent) => !isMenuOpenCurrent)}
        className={cn(styles.sideMenu_switchBtn, {
          [styles['sideMenu_switchBtn--opened']]: isMenuOpen,
        })}
      >
        <RightArrowIcon className={styles.sideMenu_rightArrowIcon} />
      </button>

      <SideMenuList />
      <SideMenuUser />
    </div>
  );
};
