/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styles from './CompanyHeading.module.scss';
import CompanySiteButton from '../CompanySiteButton';

function CompanyHeading() {
  const style = { backgroundColor: 'hsl(36, 87%, 49%)' };

  return (
    <section className={styles.wrapper}>
      <div style={style} className={styles.logowrapper}>
        <img alt="" src="/logos/scoot.svg" />
      </div>
      <div className={styles.sitewrapper}>
        <div>
          <h2>Scoot</h2>
          <p>scoot.com</p>
        </div>
        <CompanySiteButton />
      </div>
    </section>
  );
}

export default CompanyHeading;
