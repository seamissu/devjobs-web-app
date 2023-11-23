'use client';

import React from 'react';
import styles from './Main.module.scss';

import Card from '../Card';

function Main({ items }) {
  if (items.length === 0) {
    return (
      <h1 className={styles.warning}>
        Sorry, no results match your search criteria.
      </h1>
    );
  }

  return (
    <main className={styles.wrapper}>
      {items.map((company) => (
        <Card key={company.id} company={company} />
      ))}
    </main>
  );
}

export default Main;
