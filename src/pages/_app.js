import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material';
import { theme } from '../themes/default'

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
