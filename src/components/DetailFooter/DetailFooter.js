import React from 'react';
import styles from './DetailFooter.module.scss';

import Button from '../Button';

function DetailFooter() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <div>
          <h3>Senior Software Engineer</h3>
          <p>So Digital Inc.</p>
        </div>
        <Button width={141} height={48}>
          Apply Now
        </Button>
      </div>
    </footer>
  );
}

export default DetailFooter;
