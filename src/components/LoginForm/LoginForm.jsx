import React from 'react';
import { StyledLoginForm } from './LoginForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { apiUserRegister } from 'redux/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: values => {
      if (values.password === values.repeatPassword) {
        const formData = { email: values.email, password: values.password };
        dispatch(apiUserRegister(formData));
      }
    },
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
      <h2>Sign Up</h2>
      <label className="label">
        <span className="label-text">Enter your email</span>
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <label className="label">
        <span className="label-text">Enter your password</span>
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </label>
      <label className="label">
        <span className="label-text">Repeat password</span>
        <input
          className="input"
          name="repeatPassword"
          type="password"
          placeholder="Repeat password"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
      </label>
      {formik.values.password !== formik.values.repeatPassword && (
        <div>Your Passwords must match</div>
      )}
      <button type="submit">Sign Up</button>
    </StyledLoginForm>
  );
};

export default LoginForm;
