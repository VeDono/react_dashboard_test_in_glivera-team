import { FC } from 'react';
import cn from 'classnames';

import styles from './CustomerStatus.module.scss';

interface Props {
  active?: boolean;
}

export const CustomerStatus: FC<Props> = ({ active = false }) => {
  return (
    <article
      className={cn(styles.customerStatus, {
        [styles['customerStatus--inactive']]: !active,
      })}
    >
      {active ? 'Active' : 'Inactive'}
    </article>
  );
};
