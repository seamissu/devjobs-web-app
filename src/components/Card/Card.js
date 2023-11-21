/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Card.module.scss';

function Card({ company }) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.infowrapper}>
        <p>{`${company.postedAt} • ${company.contract}`}</p>
        <h3>{company.position}</h3>
        <p>{company.company}</p>
      </div>

      <h4>{company.location}</h4>
      <div
        style={{ backgroundColor: company.logoBackground }}
        className={styles.imagewrapper}
      >
        <img alt="" src={company.logo} />
      </div>
    </article>
  );
}

export default Card;
