import React, { useState } from 'react';
import Title from 'components/TitlePage';
import { Container, Typography, Stack, Divider, Tabs, Tab, Box, Grid } from '@mui/material';
import DatePicker from 'components/DatePicker';
import PropTypes from 'prop-types';
import AirlineInfoTab from './AirlineInfoTab';
import EmissionsData from './EmissionsData';
import IdentifySourceTab from './IdentifySourceTab';
const TABS = [
  {
    label: 'Airline Info',
  },
  {
    label: 'Emissions Data',
  },
  {
    label: 'Identify Source',
  },
];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function index() {
  const [from, setFrom] = useState(Date.now());
  const [to, setTo] = useState(Date.now());
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tab = TABS[value];
  const renderTab = () => {
    switch (value) {
      case 0:
        return <AirlineInfoTab data={data} setData={setData} />;
      case 1:
        return <EmissionsData data={data} setData={setData} />;
      case 2:
        return <IdentifySourceTab data={data} setData={setData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <Title>Submit New Sustainability Data</Title>
        <Typography fontSize="12px" color="textSecondary">
          State the start and end date of the year for which you are reporting data
        </Typography>
        <Stack direction="row" marginTop="12px">
          <DatePicker value={from} onChange={setFrom} text="Start Date" />
          <Stack
            sx={{ width: '24px', height: '48px', margin: '0px 12px', alignItems: 'center', justifyContent: 'center' }}
          >
            <Divider variant="middle" sx={{ width: '100%' }} />
          </Stack>
          <DatePicker value={to} onchange={setTo} text="End Date" />
        </Stack>
      </Container>
      <Container>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {TABS.map((tab, index) => (
              <Tab
                key={index}
                sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                label={tab.label}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
      </Container>
      <Container sx={{ bgcolor: '#F6F6F6', pt: '22px', flex: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '24px', mb: '22px' }}>{tab.label}</Typography>
        {renderTab()}
      </Container>
    </>
  );
}
