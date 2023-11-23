'use client';

import React from 'react';
import styles from './DetailFooter.module.scss';

import Button from '../Button';

function DetailFooter({ company }) {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <div className={styles.desktopandtablet}>
          <h3>{company.position}</h3>
          <p>So Digital Inc.</p>
        </div>
        <div className={styles.desktopandtablet}>
          <Button width={141} height={48}>
            Apply Now
          </Button>
        </div>
        <div className={styles.onlyonmobile}>
          <Button width={320} height={48}>
            Apply Now
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default DetailFooter;
