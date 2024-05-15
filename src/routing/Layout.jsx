import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-gray-800 p-5">
      <header />

      <main>
        <Outlet />
      </main>

      <footer />
    </div>
  );
};

export default Layout;
