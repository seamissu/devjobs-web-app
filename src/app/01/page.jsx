import React from 'react';
import styles from './page.module.scss';

import DetailHeader from '@/components/DetailHeader';
import DetailMain from '@/components/DetailMain';
import DetailFooter from '@/components/DetailFooter';

function DetailPage() {
  return (
    <div className={styles.wrapper}>
      <DetailHeader />
      <DetailMain />
      <DetailFooter />
    </div>
  );
}

export default DetailPage;
