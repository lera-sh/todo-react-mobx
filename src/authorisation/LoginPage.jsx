import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import AuthorisationInput from './AuthorisationInput';
import AuthStore from '../store/authStore';

const authStore = new AuthStore();

function LoginPage() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleError = useCallback((err) => setError(err), []);

  const handleSignup = useCallback(() => {
    let email = input.email.toLowerCase().trim();
    let password = input.password;
    setError('');

    authStore.loginAccount(email, password, handleError);
  }, [input, handleError]);

  const handleChange = useCallback((e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }, []);

  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="leading-4 pb-5 text-4xl">Log in todo-app</h1>
      <AuthorisationInput
        id="email"
        onChange={handleChange}
        placeholder="Enter email"
        required
        text="Email:"
        value={input.email}
      />
      <AuthorisationInput
        id="password"
        onChange={handleChange}
        placeholder="Enter password"
        required
        text="Password:"
        value={input.password}
      />
      <Button onClick={handleSignup} text="Log in" />
      <p className="pt-4">
        Don&apos;t have an account? <NavLink to="/signup">Sign Up</NavLink>
      </p>
      {error ? <p className="text-red">{error}</p> : null}
    </div>
  );
}

export default LoginPage;
