import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#2BB673',
      contrastText: 'white',
    },
    secondary: {
      main: '#F7F8F9',
    },
    text: {
      primary: 'rgba(20, 20, 43, 1)',
      secondary: 'rgba(0, 0, 0, 0.65)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});
export default theme;
