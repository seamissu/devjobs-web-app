import React from 'react';
import styles from './Main.module.scss';

import Card from '../Card';
import { Array } from '@/app/data';

console.log(Array);

function Main() {
  return (
    <main className={styles.wrapper}>
      {Array.map((company) => (
        <Card key={company.id} company={company} />
      ))}
    </main>
  );
}

export default Main;
