import React, { useState } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function LoginPage({ setUser }) {
    const handleLogin = (username) => {
      setUser(username);
    };
  
    return (
      <>
        <h1>Login Page</h1>
        <SignUpForm signUp={handleLogin} />
      </>
    );
}