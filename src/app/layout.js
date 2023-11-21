import { Kumbh_Sans } from 'next/font/google';
import { Providers } from './providers';
import './globals.scss';

const kumbhsans = Kumbh_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Devjobs Web App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kumbhsans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
