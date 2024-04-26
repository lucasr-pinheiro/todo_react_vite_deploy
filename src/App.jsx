import React, { useState, useEffect } from 'react';
import TasksPage from './pages/TasksPage';
import CEPSearchPage from './pages/CEPSearchPage';
import './App.css';
import Todo from './components/Todo';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Estado para o tema

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); // Alternar o tema
  };

  // Efeito para aplicar o tema no body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Determine qual imagem usar com base no tema atual
  const logoSrc = theme === 'light' ? '/icons/lucas-pinheiro-logo1.jpg' : '/icons/lucas-pinheiro-logo.jpg';

  return (
    <Router basename="/todo_react_vite_deploy">
      <div className="navbar">
        <a href="/">
          <img id="logo-image" src={logoSrc} alt="Lucas Silva" width="160" height="50" />
        </a>
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`menu ${isOpen ? "show" : ""}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
            Tarefas
          </NavLink>
          <NavLink to="/busca-cep" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
            Buscar CEP
          </NavLink>

          <div className="nav-link theme-toggle" onClick={toggleTheme}>
            <span className="theme-toggle-text">Alterar tema</span>
            <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
          </div>


        </nav>

      </div>
      <div className="app">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/busca-cep" element={<CEPSearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
