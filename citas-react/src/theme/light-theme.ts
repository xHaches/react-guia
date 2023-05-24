import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    typography: {
        h1: {
            fontSize: 30,
            fontWeight: 800
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    body1: 'span',
                    body2: 'p'
                }
            }
        }
    }
});