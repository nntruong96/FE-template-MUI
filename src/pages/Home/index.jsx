import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import TitlePage from 'components/TitlePage';
export default function Index() {
  return (
    <Container component="main">
      <TitlePage>Welcome to Envest Global</TitlePage>
      <Typography color="textSecondary">
        Supporting our clients to achieve net zero carbon emissions through innovative carbon reduction and investment
        strategies
      </Typography>
    </Container>
  );
}
