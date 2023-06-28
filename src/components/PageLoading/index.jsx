import React from 'react';
import { CircularProgress } from '@mui/material';
import './index.css';
export default function index() {
  return (
    <div className="loading-page">
      <CircularProgress />
    </div>
  );
}
