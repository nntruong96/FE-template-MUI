/* eslint-disable no-undef */
import CustomSnackbar from 'components/CustomSnackbar';
import React from 'react';
import AppRoutes from './routes/AppRoute';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'createTheme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRoutes />
        <CustomSnackbar />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
