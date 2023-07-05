import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#2BB673',
      contrastText: 'white',
    },
    secondary: {
      main: '#F7F8F9',
      contrastText: 'black',
    },
    text: {
      primary: 'rgba(20, 20, 43, 1)',
      secondary: 'rgba(0, 0, 0, 0.65)',
    },
    divider: 'rgba(0, 0, 0, 0.10)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '48px',
          fontSize: '14px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.10)',
          borderRadius: '8px',
          background: 'white',
        },
        notchedOutline: {
          borderColor: 'rgba(0, 0, 0, 0.10)',
          borderRadius: '8px',
        },
      },
    },
  },
});
export default theme;
