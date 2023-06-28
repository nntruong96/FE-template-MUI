import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import useShallowEqualSelector from 'utils/useShallowEqualSelector';
import { useDispatch } from 'react-redux';
import { hide } from 'redux/reducers/snackbar';

function CustomSnackbar() {
  const dispatch = useDispatch();
  const snackbarManage = useShallowEqualSelector((state) => state.snackbar);
  const { open, severity, message, autoHideDuration } = snackbarManage;
  const handleClose = () => {
    dispatch(hide());
  };
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
