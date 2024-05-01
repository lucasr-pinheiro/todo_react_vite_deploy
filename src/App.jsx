// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/Routes';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router basename="/todo_react_vite_deploy">
      <Routes>
        {routes.map(({ path, Component, Layout }) => (
          <Route key={path} path={path} element={
            <Layout isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} theme={theme}>
              <Component />
            </Layout>
          } />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
