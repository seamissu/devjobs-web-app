import React from 'react';

import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}></header>
      <section></section>
      <main></main>
      <footer></footer>
    </div>
  );
}
