import React, { useState } from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { CURRENCY_LIST, MONTH_LIST } from 'utils/Constants';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FormInput from 'pages/SubmitNewData/FormInput';
const FORMS = [
  {
    type: 'TextField',
    placeholder: 'Name of airline',
    label: 'Airline',
    key: 'name',
  },
  {
    type: 'SelectField',
    placeholder: 'Choose value',
    label: 'Airline or Group',
    key: 'type',
    options: [
      { label: 'Airline', value: 'airline' },
      {
        label: 'Group',
        value: 'group',
      },
    ],
  },
  {
    type: 'SelectField',
    placeholder: 'Choose Region',
    label: 'Region',
    key: 'region',
    options: [
      { label: 'EU', value: 'eu' },
      {
        label: 'NA',
        value: 'na',
      },
    ],
  },
  {
    type: 'SelectField',
    placeholder: 'Choose Alliance',
    label: 'Alliance',
    key: 'alliance',
    options: [
      { label: 'Alliance 1', value: 'alliance1' },
      {
        label: 'Alliance 2',
        value: 'alliance2',
      },
    ],
  },
  {
    type: 'SelectField',
    placeholder: 'Choose Month',
    label: 'Financial year end',
    key: 'alliance',
    options: MONTH_LIST,
  },
  {
    type: 'SelectField',
    placeholder: 'Choose Currency',
    label: 'Currency',
    key: 'currency',
    options: CURRENCY_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'Revenue',
    label: 'Revenue',
    key: 'revenue',
    options: CURRENCY_LIST,
    icon: AttachMoneyOutlinedIcon,
  },
  {
    type: 'SelectTextField',
    placeholder: 'Freight Revenue',
    label: 'Freight Revenue',
    key: 'freightRevenue',
    options: CURRENCY_LIST,
    icon: AttachMoneyOutlinedIcon,
  },
  {
    type: 'SelectTextField',
    placeholder: 'Passenger Revenue',
    label: 'Passenger Revenue',
    key: 'passengerRevenue',
    options: CURRENCY_LIST,
    icon: AttachMoneyOutlinedIcon,
  },
  {
    type: 'SelectTextField',
    placeholder: 'Operating Profit',
    label: 'Operating Profit',
    key: 'operatingProfit',
    options: CURRENCY_LIST,
    icon: AttachMoneyOutlinedIcon,
  },
  {
    type: 'SelectTextField',
    placeholder: 'Fuel Costs',
    label: 'Fuel Costs',
    key: 'fuelCosts',
    options: CURRENCY_LIST,
    icon: AttachMoneyOutlinedIcon,
  },
];

export default function AirlineInfoTab({ data, setData }) {
  const getForms = () => {
    const middleIndex = Math.floor(FORMS.length / 2 + (FORMS.length % 2 ? 1 : 0));
    const firstHalf = FORMS.slice(0, middleIndex);
    const secondHalf = FORMS.slice(middleIndex);
    return [firstHalf, secondHalf];
  };
  const [firstHalf, secondHalf] = getForms();
  const onChange = (key, value) => {
    const _data = { ...data };
    _data[key] = value;
    setData(_data);
  };
  const initValue = (type) => {
    switch (type) {
      case 'TextField':
        return '';
      case 'SelectField':
        return '';
      case 'SelectTextField':
        return { textValue: '', selectValue: '' };
      case 'RadiusGroup':
        return '';
      case 'UploadFile':
        return '';
      default:
        return null;
    }
  };
  return (
    <Grid
      container
      spacing={{
        sm: 8,
        xs: 4,
      }}
    >
      <Grid item xs={12} sm={6} sx={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
        {firstHalf?.map((form, index) => {
          let value = data[form.key];
          if (value === undefined) {
            value = initValue(form.type);
          }
          return <FormInput key={index} onChange={onChange} value={value} form={form} />;
        })}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
        {secondHalf?.map((form, index) => {
          let value = data[form.key];
          if (value === undefined) {
            value = initValue(form.type);
          }
          return <FormInput key={index} onChange={onChange} value={value} form={form} />;
        })}
      </Grid>
    </Grid>
  );
}

AirlineInfoTab.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};
