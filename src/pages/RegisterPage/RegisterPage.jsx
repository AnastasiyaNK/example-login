import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { StyledWrapperPng } from './styled';

const RegisterPage = () => {
  return (
    <div>
      <StyledWrapperPng>
        <RegisterForm />
      </StyledWrapperPng>
    </div>
  );
};

export default RegisterPage;
