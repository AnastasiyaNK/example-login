import LoginPage from 'pages/LogsnPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <RegisterPage />
      <Routes>
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
