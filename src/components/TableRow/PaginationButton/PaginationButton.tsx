import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './PaginationButton.module.scss';

interface Props {
  children: ReactNode;
  rightGap?: boolean;
}

export const PaginationButton: FC<Props> = ({ children, rightGap }) => {
  return (
    <button
      type="button"
      className={cn(styles.paginationButton, {
        [styles['paginationButton--rightGap']]: rightGap,
      })}
    >
      {children}
    </button>
  );
};
