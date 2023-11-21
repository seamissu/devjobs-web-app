'use client';

import { useTheme } from 'next-themes';
import React from 'react';

import styles from './ThemeButton.module.scss';

function ThemeButton() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className={styles.darkmode}
        onClick={() => setTheme('light')}
        data-hide-on-theme="light"
      >
        <div className={styles.ball}></div>
        {/* Change to Light */}
      </button>
      <button
        className={styles.lightmode}
        onClick={() => setTheme('dark')}
        data-hide-on-theme="dark"
      >
        <div className={styles.ball}></div>
        {/* Change to Dark */}
      </button>
    </div>
  );
}

export default ThemeButton;
