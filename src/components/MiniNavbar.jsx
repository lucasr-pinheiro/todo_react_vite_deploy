import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logoSrcLight from '../img/icons/lucas-pinheiro-logo1.jpg';
import logoSrcDark from '../img/icons/lucas-pinheiro-logo.jpg';
import routes from '../routes/Routes';

const Navbar = ({ isOpen, toggleMenu, toggleTheme, theme, className }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const logoSrc = theme === 'light' ? logoSrcLight : logoSrcDark;

  const handleNavLinkClick = (path) => {
    toggleMenu(false);
    if (location.pathname === path) {
      window.location.reload();
    }
  };

  // Combine 'navbar' class with any classes passed via props
  const navbarClass = `navbar ${className || ''}`.trim();

  return (
    <div >

      <button className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`menu ${isOpen ? "show" : ""}`}>
        {routes.map(route => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => handleNavLinkClick(route.path)}>
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
