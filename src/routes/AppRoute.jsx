import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import LoginLayout from 'components/Layout';
import ErrorPage from 'pages/ErrorPage';
import SustainabilityData from 'pages/SustainabilityData';
const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <LoginLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sustainability" element={<SustainabilityData />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </LoginLayout>
    </Suspense>
  );
};

export default AppRoutes;
