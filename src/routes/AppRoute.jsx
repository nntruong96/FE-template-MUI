import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
