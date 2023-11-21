import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
