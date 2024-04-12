import { FC } from 'react';

import styles from './PaginationButtons.module.scss';

import { ReactComponent as BackwardIcon } from '../../../images/icons/backward-icon.svg';
import { ReactComponent as FordwardIcon } from '../../../images/icons/forward-icon.svg';
import { PaginationButton } from '../PaginationButton';

export const PaginationButtons: FC = () => {
  return (
    <div className={styles.paginationButtons}>
      <PaginationButton rightGap>
        <BackwardIcon />
      </PaginationButton>

      <PaginationButton rightGap>1</PaginationButton>
      <PaginationButton rightGap>2</PaginationButton>
      <PaginationButton rightGap>3</PaginationButton>
      <PaginationButton>4</PaginationButton>

      <div className={styles.paginationButtons_separator}>...</div>

      <PaginationButton rightGap>40</PaginationButton>

      <PaginationButton>
        <FordwardIcon />
      </PaginationButton>
    </div>
  );
};
