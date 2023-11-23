'use client';

import React from 'react';
import styles from './SearchForm.module.scss';

import SearchIcon from '../SearchIcon';
import LocationIcon from '../LocationIcon';

import CheckIcon from '../CheckIcon';
import Button from '../Button';

function SearchForm({ handleSearch }) {
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isfulltime, setIsfulltime] = React.useState(false);

  const checkmarkclassName = `${styles.checkmark} ${
    isfulltime ? styles.checked : styles.unchecked
  }`;

  function handleSubmit(event) {
    event.preventDefault();

    handleSearch(title, location, isfulltime);

    setTitle('');
    setLocation('');
    setIsfulltime(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.titlewrapper}>
        <label htmlFor="title">
          <SearchIcon />
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Filter by title..."
        />
      </div>
      <div className={styles.locationwrapper}>
        <label htmlFor="location">
          <LocationIcon />
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          placeholder="Filter by location..."
        />
      </div>
      <div className={styles.fulltimewrapper}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="checkbox"
            checked={isfulltime}
            onChange={(event) => {
              setIsfulltime(event.target.checked);
            }}
          />
          <span className={styles.onlyondesktop}>Full Time Only</span>
          <span className={styles.onlyontablet}>Full Time</span>
          <div className={checkmarkclassName}>
            {isfulltime && <CheckIcon />}
          </div>
        </label>
        <div className={styles.onlyondesktop}>
          <Button width={123} height={48}>
            Search
          </Button>
        </div>
        <div className={styles.onlyontablet}>
          <Button width={80} height={48}>
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
