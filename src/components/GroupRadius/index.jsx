import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
export default function RadioButtonsGroup({ options, onChange, value }) {
  const [_value, setValue] = useState(value ? value : options[0]?.value || '');
  const _onChange = (e) => {
    let __value = e.target.value;
    setValue(__value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <RadioGroup
      onChange={_onChange}
      value={_value}
      sx={{
        background: 'white',
        border: '1px solid rgba(208, 213, 221, 1)',
        display: 'inline-flex',
        flexDirection: 'row',
        borderRadius: '8px',
        px: '12px',
        gap: '12px',
      }}
    >
      {options.map((op) => {
        return <FormControlLabel key={op.value} value={op.value} control={<Radio />} label={op.label} />;
      })}
    </RadioGroup>
  );
}
RadioButtonsGroup.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.any,
};
