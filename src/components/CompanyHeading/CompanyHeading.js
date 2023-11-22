/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';
import styles from './CompanyHeading.module.scss';
import CompanySiteButton from '../CompanySiteButton';

function CompanyHeading({ company }) {
  const style = { backgroundColor: company.logoBackground };

  return (
    <section className={styles.wrapper}>
      <div style={style} className={styles.logowrapper}>
        <img alt="" src={`${company.logo}`} />
      </div>
      <div className={styles.sitewrapper}>
        <div>
          <h2>{company.company}</h2>
          <p>{`${company.company}.com`.toLowerCase()}</p>
        </div>
        <CompanySiteButton />
      </div>
    </section>
  );
}

export default CompanyHeading;
