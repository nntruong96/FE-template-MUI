import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import LoginLayout from 'components/Layout';
import ErrorPage from 'pages/ErrorPage';
import SustainabilityData from 'pages/SustainabilityData';
import AirlineSustainabilityRatings from 'pages/AirlineSustainabilityRatings';
import Users from 'pages/Users';
import SubmitNewData from 'pages/SubmitNewData';
export const ROUTES = {
  main: '',
  sustainability: 'sustainability',
  airlineRating: 'airline-rating',
  reports: 'reports',
  users: 'users',
  notifications: 'notifications',
  settings: 'settings',
  submitNew: 'submit-new',
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <LoginLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'/' + ROUTES.sustainability} element={<SustainabilityData />} />
          <Route path={'/' + ROUTES.airlineRating} element={<AirlineSustainabilityRatings />} />
          <Route path={'/' + ROUTES.users} element={<Users />} />
          <Route path={'/' + ROUTES.submitNew} element={<SubmitNewData />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </LoginLayout>
    </Suspense>
  );
};

export default AppRoutes;
