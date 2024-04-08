import { FC } from 'react';

import styles from './CustomerTable.module.scss';
import { CustomerStatus } from '../CustomerStatus';

export const CustomerTable: FC = () => {
  return (
    <table className={styles.customerTable}>
      <thead className={styles.customerTable_header}>
        <tr>
          <th className={styles.customerTable_column}>Customer Name</th>
          <th className={styles.customerTable_column}>Company</th>
          <th className={styles.customerTable_column}>Phone Number</th>
          <th className={styles.customerTable_column}>Email</th>
          <th className={styles.customerTable_column}>Country</th>
          <th className={styles['customerTable_column-status']}>Status</th>
        </tr>
      </thead>
      <div className={styles.customerTable_divider}>{}</div>
      <tbody>
        <tr>
          <td className={styles.customerTable_data}>Jane Cooper</td>
          <td className={styles.customerTable_data}>Microsoft</td>
          <td className={styles.customerTable_data}>(225) 555-0118</td>
          <td className={styles.customerTable_data}>jane@microsoft.com</td>
          <td className={styles.customerTable_data}>United States</td>
          <td
            aria-label="customer-status"
            className={styles['customerTable_data-status']}
          >
            <CustomerStatus />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
