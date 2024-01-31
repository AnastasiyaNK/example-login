import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { StyledWrapperPng } from './styled';
import { StyledMainContainer } from 'components/Container.styled';

const RegisterPage = () => {
  return (
    <StyledWrapperPng>
      <StyledMainContainer>
        <RegisterForm />
      </StyledMainContainer>
    </StyledWrapperPng>
  );
};

export default RegisterPage;
