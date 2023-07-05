import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function UploadFile({ label, onChange, ...other }) {
  const [file, setFile] = useState(null);
  const _onChange = (e) => {
    setFile(e.target.files[0]);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Box
      {...other}
      sx={{
        bgcolor: 'white',
        height: '84px',
        p: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: '12px',
          height: '100%',
          bgcolor: 'rgba(43, 182, 115, 0.10)',
          border: '1px dashed #2BB673',
          borderRadius: '4px',
        }}
        component="label"
        htmlFor="upload"
      >
        <Typography color="primary.main" mr="4px">
          <CloudUploadIcon color="inherit" />
        </Typography>
        <Typography fontSize="12px" color="primary.main" fontWeight={600}>
          {label ? label : 'Browse and chose the attachments you want to upload'}
        </Typography>
        <input type="file" id="upload" onChange={_onChange} hidden />
      </Box>
    </Box>
  );
}
UploadFile.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};
