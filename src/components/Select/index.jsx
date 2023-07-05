import React, { useState, useEffect } from 'react';

import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export default function SelectComponent({ value = '', onChange = () => {}, placeholder = '', options, ...other }) {
  const [_value, setValue] = useState(value);
  const _onChange = (e) => {
    let __value = e.target.value;
    setValue(__value);
    if (onChange) {
      onChange(e);
    }
  };
  useEffect(() => {
    if (_value !== value) {
      setValue(value);
    }
  }, [value]);
  return (
    <Select native value={_value} onChange={_onChange} {...other}>
      <option aria-label="None" value="">
        {placeholder}
      </option>
      {options.map((op) => {
        return (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        );
      })}
    </Select>
  );
}
SelectComponent.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.any,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};
