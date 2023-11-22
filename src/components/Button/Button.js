import React from 'react';
import styles from './Button.module.scss';

function Button({ width, height, children }) {
  const style = { width: `${width}px`, height: `${height}px` };

  return (
    <button style={style} className={styles.wrapper}>
      {children}
    </button>
  );
}

export default Button;
