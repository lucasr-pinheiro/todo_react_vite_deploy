// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage';
import CEPSearchPage from './pages/CEPSearchPage';
import ChartPage from './pages/ChartPage';
import routes from './routes/Routes';


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Router basename="/todo_react_vite_deploy">
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} theme={theme} />
      <div className="app">
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
