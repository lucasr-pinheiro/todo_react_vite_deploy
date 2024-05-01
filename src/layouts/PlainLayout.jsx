import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DefaultLayout = ({ children, isOpen, toggleMenu, toggleTheme, theme }) => (
  <>
    <Navbar isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} theme={theme} />
    <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    <div className="app-content">
      {children}
    </div>
  </>
);

export default DefaultLayout;
