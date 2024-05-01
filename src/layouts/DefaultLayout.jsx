// src/layouts/DefaultLayout.js
import React from 'react';
import Navbar from '../components/Navbar';

const DefaultLayout = ({ children, isOpen, toggleMenu, toggleTheme, theme }) => (
  <>
    <Navbar isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} theme={theme} />
    <div className="app">{children}</div>
  </>
);

export default DefaultLayout;