import React from 'react';
import Navbar from '../components/MiniNavbar';
import Sidebar from '../components/Sidebar';
import logoSrcLight from '../img/icons/lucas-pinheiro-logo1.jpg';

const DefaultLayout = ({ children, isOpen, toggleMenu, toggleTheme, theme }) => (
  <div className="layout-container">
    <div className="sidebar-container">
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
    <div className="small-navbar">
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} theme={theme} />
    </div>
    <div className="sidebar-header">
      <a href="/todo_react_vite_deploy/device-list">
        <img src={logoSrcLight} alt="Fábricas" className="sidebar-header-logo" />
      </a>
    </div>
    <div className="app-content">
      {children}
    </div>
  </div>
);

export default DefaultLayout;
