import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { MEASUREMENT_LIST } from 'utils/Constants';
import Switch from 'components/Switch';
import FormInput from 'pages/SubmitNewData/FormInput';
import PercentIcon from '@mui/icons-material/Percent';

const FORMS = [
  {
    type: 'SelectTextField',
    placeholder: 'Fuel Use',
    label: 'Fuel Use',
    key: 'fuelUse',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'CO 2 e Emissions',
    label: 'CO 2 e Emissions (Scope 1 Fuel Consumption/Aircraft emissions)',
    key: 'co2e',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'CO 2 e Emission',
    label:
      'CO 2 e Emissions (Scope 1 Total including Scope 1 emissions from Fuel/Aircraft and Scope 1 emissions from other sources)',
    key: 'co2e2',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'CO 2 e Emissions',
    label: 'CO 2 e Emissions (Scope 2 Total)',
    key: 'co2e3',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'CO 2 e Emissions',
    label: 'CO 2 e Emissions (Scope 3 Total)',
    key: 'co2e4',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'Total CO2e Emissions',
    label: 'Total CO2e Emissions',
    key: 'totalCo2e',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    placeholder: 'SAF Usage (Tonnes)',
    label: 'SAF Usage (Tonnes)',
    key: 'SAFUsage',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'TextField',
    placeholder: 'SAF goals (% by year)',
    label: 'SAF goals (% by year)',
    key: 'SAFgoals',
    options: MEASUREMENT_LIST,
    iconRight: PercentIcon,
  },
  {
    type: 'RadiusGroup',
    label: 'Does the Airline offer green fares ',
    key: 'doesTheAirline',
    options: [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 },
    ],
  },
];
const FORMS_2 = [
  {
    type: 'SelectTextField',
    label: 'Carbon Offsets (airline purchased)',
    key: 'carbonOffsets',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    label: 'Total offset equivalent',
    key: 'totalOffsetEquivalent',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    label: 'Carbon Offsets (passenger purchased)',
    key: 'carbonOffsets2',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'SelectTextField',
    label: 'Cost of Carbon Offsets',
    key: 'costOfCarbonOffsets',
    options: MEASUREMENT_LIST,
  },
  {
    type: 'Typography',
    label: `Offset certification/validation`,
  },
  {
    type: 'TextField',
    label: 'URL',
    key: 'url',
  },
  {
    type: 'UploadFile',
    label: 'Upload Screenshots, attchments',
    key: 'file',
  },
];

export default function EmissionsData({ data, setData }) {
  const getForms = (form) => {
    const middleIndex = Math.floor(form.length / 2 + (form.length % 2 ? 1 : 0));
    const firstHalf = form.slice(0, middleIndex);
    const secondHalf = form.slice(middleIndex);

    return [firstHalf, secondHalf];
  };
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
  const renderGid = (forms) => {
    return (
      <Grid item xs={12} sm={6} sx={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
        {forms?.map((form, index) => {
          let value = data[form.key];
          if (value === undefined) {
            value = initValue(form.type);
          }
          return <FormInput key={index} onChange={onChange} value={value} form={form} />;
        })}
      </Grid>
    );
  };
  const renderContainerGrid = (form) => {
    const [firstHalf, secondHalf] = getForms(form);
    return (
      <Grid
        container
        spacing={{
          sm: 8,
          xs: 4,
        }}
      >
        {renderGid(firstHalf)}
        {renderGid(secondHalf)}
      </Grid>
    );
  };
  return (
    <>
      {renderContainerGrid(FORMS)}
      <Switch label="Offset Program" sx={{ mt: '20px', mb: '20px' }} />
      {renderContainerGrid(FORMS_2)}
    </>
  );
}
EmissionsData.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};
