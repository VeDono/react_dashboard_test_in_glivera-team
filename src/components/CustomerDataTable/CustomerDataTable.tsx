import { FC } from 'react';

import styles from './CustomerDataTable.module.scss';

import searchIcon from '../../images/icons/search-icon.svg';

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
    </article>
  );
};
