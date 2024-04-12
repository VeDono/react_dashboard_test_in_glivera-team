import { FC } from 'react';
import { SideMenuCategory } from '../SideMenuCategory';

import { ReactComponent as KeyIcon } from '../../../images/icons/key-square.svg';
import { ReactComponent as Square3DIcon } from '../../../images/icons/3d-square-icon.svg';
import { ReactComponent as UserIcon } from '../../../images/icons/user-icon.svg';
import { ReactComponent as WalletIcon } from '../../../images/icons/wallet-icon.svg';
import { ReactComponent as DiscountIcon } from '../../../images/icons/discount-icon.svg';
import { ReactComponent as QuestionIcon } from '../../../images/icons/question-icon.svg';
// eslint-disable-next-line max-len
import { ReactComponent as ArrowRight } from '../../../images/icons/chevron-right-dark.svg';

import styles from './SideMenuList.module.scss';

export const SideMenuList: FC = () => {
  return (
    <div>
      <SideMenuCategory>
        <KeyIcon className={styles.sideMenuElement_leftIcon} />

        <span className={styles.sideMenuElement_title}>Dashboard</span>
      </SideMenuCategory>

      <SideMenuCategory>
        <Square3DIcon className={styles.sideMenuElement_leftIcon} />

        <span className={styles.sideMenuElement_title}>Product</span>

        <ArrowRight className={styles.sideMenuElement_rightIcon} />
      </SideMenuCategory>

      <SideMenuCategory>
        <UserIcon className={styles.sideMenuElement_leftIcon} />

        <span className={styles.sideMenuElement_title}>Customers</span>

        <ArrowRight className={styles.sideMenuElement_rightIcon} />
      </SideMenuCategory>

      <SideMenuCategory>
        <WalletIcon className={styles.sideMenuElement_leftIcon} />

        <span className={styles.sideMenuElement_title}>Income</span>

        <ArrowRight className={styles.sideMenuElement_rightIcon} />
      </SideMenuCategory>

      <SideMenuCategory>
        <DiscountIcon className={styles.sideMenuElement_leftIcon} />

        <span className={styles.sideMenuElement_title}>Promote</span>

        <ArrowRight className={styles.sideMenuElement_rightIcon} />
      </SideMenuCategory>

      <SideMenuCategory>
        <QuestionIcon className={styles.sideMenuElement_leftIcon} />

        <span className={styles.sideMenuElement_title}>Help</span>

        <ArrowRight className={styles.sideMenuElement_rightIcon} />
      </SideMenuCategory>
    </div>
  );
};
