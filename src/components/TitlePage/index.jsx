import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
export default function Title({ children }) {
  return (
    <Typography
      sx={{
        fontWeight: 'bold',
        fontSize: '20px',
      }}
    >
      {children}
    </Typography>
  );
}
Title.propTypes = {
  children: PropTypes.any,
};
