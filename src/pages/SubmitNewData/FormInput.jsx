/* eslint-disable no-case-declarations */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Stack, Divider, Tabs, Tab, Box, TextField } from '@mui/material';
import SelectTextField from 'components/SelectTextField';
import Select from 'components/Select';
import RadioButtonsGroup from 'components/GroupRadius';
import UploadFile from 'components/UploadFile';
export default function FormInput({ form, onChange, value, ...other }) {
  let { type, label, options, key, ..._other } = form;
  const onChangeText = (e) => {
    const { value: _value } = e.target;
    if (onChange) {
      if (type === 'SelectTextField') {
        return onChange(key, { ...value, textValue: _value });
      }
      onChange(key, _value);
    }
  };
  const onChangeSelect = (e) => {
    const { value: _value } = e.target;
    if (onChange) {
      if (type === 'SelectTextField') {
        return onChange(key, { ...value, selectValue: _value });
      }
      onChange(key, _value);
    }
  };
  const onChangeFile = (e) => {
    const files = e.target.files[0];
    if (onChange) {
      onChange(key, files);
    }
  };
  const onChangeRadio = (e) => {
    const { value: _value } = e.target;
    if (onChange) {
      onChange(key, _value);
    }
  };
  const renderInput = () => {
    switch (type) {
      case 'TextField':
        let { iconRight: IconRight, iconLeft: IconLeft, sx = {}, ...__other } = _other;

        return (
          <TextField
            {...__other}
            onChange={onChangeText}
            sx={{ width: '100%', ...sx }}
            InputProps={{
              endAdornment: IconRight ? <IconRight sx={{ color: '#667085' }} /> : null,
              startAdornment: IconLeft ? <IconLeft sx={{ color: '#667085' }} /> : null,
            }}
          />
        );
      case 'SelectField':
        return <Select onChange={onChangeSelect} options={options} {..._other} sx={{ width: '100%' }} />;
      case 'SelectTextField':
        return (
          <SelectTextField
            onChangeSelect={onChangeSelect}
            onChangeText={onChangeText}
            options={options}
            {..._other}
            sx={{ width: '100%' }}
          />
        );
      case 'RadiusGroup':
        return <RadioButtonsGroup onChange={onChangeRadio} options={options} {..._other} sx={{ width: '100%' }} />;
      case 'UploadFile':
        return <UploadFile onChange={onChangeFile} {..._other} sx={{ width: '100%' }} />;
      default:
        return null;
    }
  };

  return (
    <Box {...other}>
      <Typography fontWeight={600} fontSize="14px" mb="8px" color="rgba(73, 69, 79, 1)">
        {label}
      </Typography>
      {renderInput()}
    </Box>
  );
}
FormInput.propTypes = {
  form: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any,
};
