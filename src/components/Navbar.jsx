// src/components/Navbar.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logoSrcLight from '../img/icons/lucas-pinheiro-logo1.jpg';
import logoSrcDark from '../img/icons/lucas-pinheiro-logo.jpg';
import routes from '../routes/Routes'; // Importa as rotas aqui

const Navbar = ({ isOpen, toggleMenu, toggleTheme, theme }) => {
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const logoSrc = theme === 'light' ? logoSrcLight : logoSrcDark;

  return (
    <div className="navbar">
      <a href="/">
        <img id="logo-image" src={logoSrc} alt="Lucas Silva" width="160" height="50" />
      </a>
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`menu ${isOpen ? "show" : ""}`}>
        {routes.map(route => (
          <NavLink key={route.path} to={route.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => toggleMenu(false)}>
            {route.label}
          </NavLink>
        ))}
        <div className="nav-link theme-toggle" onClick={toggleTheme}>
          <span className="theme-toggle-text">Alterar tema</span>
          <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
