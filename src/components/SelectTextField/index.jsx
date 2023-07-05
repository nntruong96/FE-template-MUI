import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';

export default function SelectTextField({
  valueText = '',
  valueSelect = '',
  onChangeText = () => {},
  onChangeSelect = () => {},
  placeholder = '',
  options,
  icon: Icon,
  sx = {},
  ...other
}) {
  const [_valueText, setValueText] = useState(valueText);
  const [_valueSelect, setValueSelect] = useState(valueSelect);

  const _onChangeText = (e) => {
    const __value = e.target.value;
    setValueText(__value);
    if (onChangeText) {
      onChangeText(e);
    }
  };

  const _onChangeSelect = (e) => {
    const __value = e.target.value;
    setValueSelect(__value);
    if (onChangeSelect) {
      onChangeSelect(e);
    }
  };

  useEffect(() => {
    if (_valueText !== valueText) {
      setValueText(valueText);
    }
  }, [valueText]);

  useEffect(() => {
    if (_valueSelect !== valueSelect) {
      setValueSelect(valueSelect);
    }
  }, [valueSelect]);

  return (
    <TextField
      value={_valueText}
      onChange={_onChangeText}
      placeholder={placeholder}
      sx={{
        '& .MuiInputBase-root': {
          paddingRight: '0px',
          '& input:-internal-autofill-selected': {
            boxSizing: 'border-box',
            height: '100%',
          },
          '& .MuiNativeSelect-select': {
            width: 'fit-content',
          },
        },
        ...sx,
      }}
      InputProps={{
        startAdornment: Icon ? (
          <InputAdornment position="start">
            <Icon sx={{ color: '#667085' }} />
          </InputAdornment>
        ) : null,
        endAdornment: (
          <InputAdornment position="end">
            <Select
              native
              value={_valueSelect}
              onChange={_onChangeSelect}
              sx={{
                '& fieldset': {
                  border: 'unset',
                },
              }}
            >
              {options.map((op) => {
                return (
                  <option key={op.value} value={op.value}>
                    {op.label}
                  </option>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      {...other}
    />
  );
}

SelectTextField.propTypes = {
  valueText: PropTypes.any,
  valueSelect: PropTypes.any,
  onChangeText: PropTypes.func,
  onChangeSelect: PropTypes.func,
  icon: PropTypes.any,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  sx: PropTypes.any,
};
