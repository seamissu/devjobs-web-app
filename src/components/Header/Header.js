'use client';

import React from 'react';
import styles from './Header.module.scss';

import DevJobsLogo from '../DevJobsLogo';
import SunIcon from '../SunIcon';
import MoonIcon from '../MoonIcon';

import ThemeButton from '../ThemeButton';
import SearchForm from '../SearchForm';
import MobileSearchForm from '../MobileSearchForm';

function Header({
  handleSearch,
  handleSearchTitle,
  handleLocationAndFulltime,
}) {
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
      <div className={styles.notonmobile}>
        <SearchForm handleSearch={handleSearch} />
      </div>
      <div className={styles.onlyonmobile}>
        <MobileSearchForm
          handleSearchTitle={handleSearchTitle}
          handleLocationAndFulltime={handleLocationAndFulltime}
        />
      </div>
    </header>
  );
}

export default Header;
