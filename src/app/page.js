'use client';

import React from 'react';
import styles from './page.module.scss';

import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

import { Array } from './data';

export default function Home() {
  const [items, setItems] = React.useState(Array);

  function handleSearch(title, location, isfulltime) {
    let firstFilterArray;
    let secondFilterArray;
    let thirdFilterArray;

    if (title === '') {
      firstFilterArray = [...Array];
    } else {
      firstFilterArray = Array.filter((item) =>
        item.position.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (location === '') {
      secondFilterArray = firstFilterArray;
    } else {
      secondFilterArray = firstFilterArray.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (isfulltime === false) {
      thirdFilterArray = secondFilterArray;
    } else {
      thirdFilterArray = secondFilterArray.filter(
        (item) => item.contract === 'Full Time'
      );
    }

    setItems(thirdFilterArray);
  }

  function handleSearchTitle(title) {
    let titleFilterArray;

    if (title === '') {
      titleFilterArray = [...Array];
    } else {
      titleFilterArray = Array.filter((item) =>
        item.position.toLowerCase().includes(title.toLowerCase())
      );
    }

    setItems(titleFilterArray);
  }

  function handleLocationAndFulltime(location, isfulltime) {
    let LocationFilterArray;
    let FulltimeFilterArray;

    if (location === '') {
      LocationFilterArray = [...Array];
    } else {
      LocationFilterArray = Array.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (isfulltime === false) {
      FulltimeFilterArray = LocationFilterArray;
    } else {
      FulltimeFilterArray = LocationFilterArray.filter(
        (item) => item.contract === 'Full Time'
      );
    }

    setItems(FulltimeFilterArray);
  }

  return (
    <div className={styles.wrapper}>
      <Header
        handleSearch={handleSearch}
        handleSearchTitle={handleSearchTitle}
        handleLocationAndFulltime={handleLocationAndFulltime}
      />
      <Main items={items} />
      <Footer />
    </div>
  );
}
