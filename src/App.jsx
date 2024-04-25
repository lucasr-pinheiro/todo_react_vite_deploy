import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import CEPSearchPage from './pages/CEPSearchPage';
import './App.css';
import Todo from './components/Todo';

const App = () => {
  return (
    <Router basename="/todo_react_vite_deploy">
      <div className="app">
        <h1>Lista de Tarefas e Busca de CEP</h1>
        <nav>
          <Link to="/" className="button-style">Tarefas</Link>
          <Link to="/busca-cep" className="button-style">Buscar CEP</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/busca-cep" element={<CEPSearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
