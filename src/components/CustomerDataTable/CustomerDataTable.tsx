import { FC } from 'react';

import styles from './CustomerDataTable.module.scss';

import searchIcon from '../../images/icons/search-icon.svg';
import { CustomerTable } from '../CustomerTable';
import { PaginationButtons } from '../PaginationButtons';

export const CustomerDataTable: FC = () => {
  return (
    <article className={styles.customerDataTable}>
      <div className={styles.customerDataTable_header}>
        <div className={styles.customerDataTable_titles}>
          <h1 className={styles['customerDataTable_titles-title']}>
            All Customers
          </h1>

          <h3 className={styles['customerDataTable_titles-subtitle']}>
            Active Members
          </h3>
        </div>

        <div className={styles.customerDataTable_inputWrapper}>
          <img
            className={styles['customerDataTable_inputWrapper-icon']}
            src={searchIcon}
            alt="search-icon"
          />

          <input
            className={styles['customerDataTable_inputWrapper-input']}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <CustomerTable />

      <div className={styles.customerDataTable_footer}>
        <p className={styles['customerDataTable_footer-info']}>
          Showing data 1 to 8 of 256K entries
        </p>

        <PaginationButtons />
      </div>
    </article>
  );
};
