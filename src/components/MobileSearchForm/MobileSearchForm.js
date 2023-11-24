'use client';

import React from 'react';
import styles from './MobileSearchForm.module.scss';

import FilterIcon from '../FilterIcon';
import LocationIcon from '../LocationIcon';
import CheckIcon from '../CheckIcon';
import SearchIconMobile from '../SearchIconMobile';

import Button from '../Button';
import * as Dialog from '@radix-ui/react-dialog';

function MobileSearchForm({
  handleSearchTitle,
  handleLocationAndFulltime,
}) {
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isfulltime, setIsfulltime] = React.useState(false);

  const [IsOpen, setIsOpen] = React.useState(false);

  const checkmarkclassName = `${styles.checkmark} ${
    isfulltime ? styles.checked : styles.unchecked
  }`;

  function handleSubmitTitle(event) {
    event.preventDefault();

    handleSearchTitle(title);

    setTitle('');
  }

  function handleLocationAndFullTime(event) {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(false);

    handleLocationAndFulltime(location, isfulltime);

    setLocation('');
    setIsfulltime(false);
  }

  return (
    <form onSubmit={handleSubmitTitle} className={styles.wrapper}>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        placeholder="Filter by title..."
      />

      <Dialog.Root open={IsOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild={true}>
          <button type="button" className={styles.triggerbutton}>
            <FilterIcon />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.content}>
            <form
              onSubmit={handleLocationAndFullTime}
              className={styles.innerform}
            >
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
                  Full Time Only
                  <div className={checkmarkclassName}>
                    {isfulltime && <CheckIcon />}
                  </div>
                </label>
              </div>

              <button className={styles.submitbutton} type="submit">
                Search
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Button width={48} height={48}>
        <SearchIconMobile />
      </Button>
    </form>
  );
}

export default MobileSearchForm;
