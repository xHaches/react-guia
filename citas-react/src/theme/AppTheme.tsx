import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './light-theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const AppTheme = ({children}: {children: JSX.Element}) => {
  return (
    <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
