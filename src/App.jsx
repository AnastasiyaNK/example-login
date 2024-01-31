import Layout from 'Layout';
import Header from 'components/Header/Header';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import LoginPage from 'pages/LogsnPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Layout>
      <Routes>
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
