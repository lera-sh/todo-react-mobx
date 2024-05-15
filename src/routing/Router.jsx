import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import Layout from './Layout';

const Router = () => {
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      <Route element={<Layout />} path="/">
        {privateRoutes.map((route) => (
          <Route key={route.path} element={<route.element />} path={route.path} />
        ))}
        <Route element={<Navigate to="todo" />} path="*" />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route element={<Layout />} path="/">
        {publicRoutes.map((route) => (
          <Route key={route.path} element={<route.element />} path={route.path} />
        ))}
        <Route element={<Navigate to="login" />} path="*" />
      </Route>
    </Routes>
  );
};

export default Router;
