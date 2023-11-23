'use client';

import React from 'react';
import styles from './Header.module.scss';

import DevJobsLogo from '../DevJobsLogo';
import SunIcon from '../SunIcon';
import MoonIcon from '../MoonIcon';

import ThemeButton from '../ThemeButton';
import SearchForm from '../SearchForm';

function Header({ handleSearch }) {
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
      <SearchForm handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
