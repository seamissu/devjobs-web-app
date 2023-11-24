import React from 'react';
import styles from './Button.module.scss';

function Button({ width, height, children, ...delegated }, ref) {
  const style = { width: `${width}px`, height: `${height}px` };

  return (
    <button
      style={style}
      className={styles.wrapper}
      ref={ref}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
