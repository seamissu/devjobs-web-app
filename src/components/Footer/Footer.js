import React from 'react';
import styles from './Footer.module.scss';

import Button from '../Button';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Button width={141} height={48}>
        Load More
      </Button>
    </footer>
  );
}

export default Footer;
