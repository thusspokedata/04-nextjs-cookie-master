import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme, customTheme } from '../themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
