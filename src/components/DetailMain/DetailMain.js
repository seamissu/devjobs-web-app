'use client';

import React from 'react';
import styles from './DetailMain.module.scss';

import Button from '../Button';

function DetailMain({ company }) {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        <section className={styles.applywrapper}>
          <div>
            <p>{`${company.postedAt} • ${company.contract}`}</p>
            <h1>{company.position}</h1>
            <h4>{company.location}</h4>
          </div>
          <Button width={141} height={48}>
            Apply Now
          </Button>
        </section>

        <section className={styles.description}>
          {company.description}
        </section>

        <section className={styles.requirements}>
          <h3>Requirements</h3>
          <p>{company.requirements.content}</p>
          <ul>
            {company.requirements.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.role}>
          <h3>What You Will Do</h3>
          <p>{company.role.content}</p>
          <ol>
            {company.role.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}

export default DetailMain;
