import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function index() {
  return (
    <Container
      sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="h3">404 - Page Not Found</Typography>
      <Typography variant="h5">Oops! The page you are looking for does not exist.</Typography>
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: '12px' }}>
        Go back to Home
      </Button>
    </Container>
  );
}
