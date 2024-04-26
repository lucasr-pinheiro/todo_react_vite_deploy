// src/routes.js
import TasksPage from '../pages/TasksPage';
import CEPSearchPage from '../pages/CEPSearchPage';
import ChartPage from '../pages/ChartPage';

const routes = [
  { path: '/', label: 'Tarefas', Component: TasksPage },
  { path: '/busca-cep', label: 'Buscar CEP', Component: CEPSearchPage },
  { path: '/chart-page', label: 'Chart Page', Component: ChartPage }
];

export default routes;
