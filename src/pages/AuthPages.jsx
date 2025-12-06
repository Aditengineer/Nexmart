import React from "react";
import { LoginForm, RegisterForm } from "../components/auth/AuthForms";
import "./AuthPages.css";

export const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <LoginForm />
      </div>
    </div>
  );
};

export const RegisterPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <RegisterForm />
      </div>
    </div>
  );
};
