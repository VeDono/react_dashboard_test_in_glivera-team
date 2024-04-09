import { FC } from 'react';
import { CustomerStatus } from '../CustomerStatus';

import styles from './TableRow.module.scss';

interface Props {
  name: string;
  company: string;
  number: string;
  email: string;
  country: string;
  status: boolean;
}

export const TableRow: FC<Props> = ({
  name,
  company,
  number,
  email,
  country,
  status,
}) => {
  return (
    <>
      <tr>
        <td className={styles.tableRow_data}>{name}</td>
        <td className={styles.tableRow_data}>{company}</td>
        <td className={styles.tableRow_data}>{number}</td>
        <td className={styles.tableRow_data}>{email}</td>
        <td className={styles.tableRow_data}>{country}</td>
        <td
          aria-label="customer-status"
          className={styles['tableRow_data-status']}
        >
          <CustomerStatus active={status} />
        </td>
      </tr>
      <div className={styles.tableRow_rowDivider}>{}</div>
    </>
  );
};
