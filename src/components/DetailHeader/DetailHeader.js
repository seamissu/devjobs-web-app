import React from 'react';
import styles from './DetailHeader.module.scss';

import DevJobsLogo from '../DevJobsLogo';
import SunIcon from '../SunIcon';
import MoonIcon from '../MoonIcon';
import ThemeButton from '../ThemeButton';

function DetailHeader() {
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
      <div></div>
    </header>
  );
}

export default DetailHeader;
