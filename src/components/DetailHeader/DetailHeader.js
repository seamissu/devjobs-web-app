'use client';

import React from 'react';
import styles from './DetailHeader.module.scss';

import DevJobsLogo from '../DevJobsLogo';
import SunIcon from '../SunIcon';
import MoonIcon from '../MoonIcon';
import ThemeButton from '../ThemeButton';

import CompanyHeading from '../CompanyHeading';

function DetailHeader({ company }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.superheader}>
        <DevJobsLogo />
        <div className={styles.iconwrapper}>
          <SunIcon />
          <ThemeButton />
          <MoonIcon />
        </div>
      </div>
      <CompanyHeading company={company} />
    </header>
  );
}

export default DetailHeader;
