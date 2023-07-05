import React from 'react';
import { Container, Typography, ListItemButton, Stack, Divider, Tabs, Tab, Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import FormInput from 'pages/SubmitNewData/FormInput';
const TABS = [
  {
    label: 'Scope 1',
    value: 0,
  },
  {
    label: 'Scope 2',
    value: 1,
  },
  {
    label: 'Scope 3',
    value: 2,
  },
];

export default function IdentifySourceTab() {
  const [value, setValue] = React.useState(0);
  return (
    <Grid container spacing={8} sx={{ paddingBottom: '12px' }}>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '4px',
            overflow: 'hidden',
            p: '12px',
          }}
        >
          {TABS.map((i) => {
            return (
              <ListItemButton
                sx={{
                  bgcolor: value === i.value ? 'primary.main' : 'white',
                  fontWeight: 600,
                  borderRadius: '4px',
                  py: '14px',
                  color: value === i.value ? 'white' : 'rgba(73, 69, 79, 1)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
                onClick={() => {
                  setValue(i.value);
                }}
                key={i.label}
              >
                {i.label}
              </ListItemButton>
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box>
          <Typography fontWeight="bold" fontSize="14px">
            Provide further details of data source information linked to input data of Scope 1: Screenshots, attachments
            and URLs
          </Typography>
          <FormInput
            form={{
              type: 'TextField',
              label: 'URL',
              key: 'url',
              placeholder: 'https://www.example.com',
            }}
            sx={{ mb: '20px' }}
          />
          <FormInput
            form={{
              type: 'UploadFile',
              label: 'Upload Screenshots, attachments',
              key: 'file',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
