'use client';

import React from 'react';
import styles from './page.module.scss';

import DetailHeader from '@/components/DetailHeader';
import DetailMain from '@/components/DetailMain';
import DetailFooter from '@/components/DetailFooter';

import { Array } from '@/app/data';
const validSlugs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function DetailPage({ params }) {
  const slug = params.slug;

  if (!validSlugs.includes(Number(slug)))
    return <h1 className={styles.warning}>404 Page Not Found</h1>;

  const company = Array.find((item) => item.id === Number(slug));

  return (
    <div className={styles.wrapper}>
      <DetailHeader company={company} />
      <DetailMain company={company} />
      <DetailFooter company={company} />
    </div>
  );
}

export default DetailPage;
