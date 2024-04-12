import { FC } from 'react';

import styles from './CustomerTable.module.scss';
import { TableRow } from '../TableRow';

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
        <tr className={styles.customerTable_divider}>
          <td className={styles['customerTable_divider-td']}>{}</td>
        </tr>
      </thead>
      <tbody className={styles.customerTable_body}>
        <TableRow
          name="Jane Cooper"
          company="Microsoft"
          number="(225) 555-0118"
          email="jane@microsoft.com"
          country="United States"
          status
        />

        <TableRow
          name="Floyd Miles"
          company="Yahoo"
          number="(205) 555-0100"
          email="floyd@yahoo.com"
          country="Kiribati"
          status={false}
        />

        <TableRow
          name="Ronald Richards"
          company="Adobe"
          number="(302) 555-0107"
          email="ronald@adobe.com"
          country="Israel"
          status={false}
        />

        <TableRow
          name="Marvin McKinney"
          company="Tesla"
          number="(252) 555-0126"
          email="marvin@tesla.com"
          country="Iran"
          status
        />

        <TableRow
          name="Jerome Bell"
          company="Google"
          number="(629) 555-0129"
          email="jerome@google.com"
          country="Réunion"
          status
        />

        <TableRow
          name="Kathryn Murphy"
          company="Microsoft"
          number="(406) 555-0120"
          email="kathryn@microsoft.com"
          country="Curaçao"
          status
        />

        <TableRow
          name="Jacob Jones"
          company="Yahoo"
          number="(208) 555-0112"
          email="jacob@yahoo.com"
          country="Brazil"
          status
        />

        <TableRow
          name="Kristin Watson"
          company="Facebook"
          number="(704) 555-0127"
          email="kristin@facebook.com"
          country="Åland Islands"
          status={false}
        />
      </tbody>
    </table>
  );
};
