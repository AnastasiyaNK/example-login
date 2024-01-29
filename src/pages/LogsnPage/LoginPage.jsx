import React from 'react';
import { StyledLoginPage } from './styled';
import { LoginForm } from 'components';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="container">
        <div className="block-right">
          <LoginForm />
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
