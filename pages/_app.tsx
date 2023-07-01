import { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme, customTheme } from '../themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme =
      cookieTheme === 'light'
        ? lightTheme
        : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
