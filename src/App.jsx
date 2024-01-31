import Layout from 'Layout';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LogsnPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
      </Routes>
    </Layout>
  );
};
