'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';

export function Provider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
