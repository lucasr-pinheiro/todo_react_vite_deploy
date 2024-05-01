// src/routes/Routes.js
import TasksPage from '../pages/TasksPage';
import CEPSearchPage from '../pages/CEPSearchPage';
import ChartPage from '../pages/ChartPage';
import DeviceListPage from '../pages/DeviceListPage';
import DefaultLayout from '../layouts/DefaultLayout';
import PlainLayout from '../layouts/PlainLayout';

const routes = [
  { path: '/', label: 'Tarefas', Component: TasksPage, Layout: DefaultLayout },
  { path: '/busca-cep', label: 'Buscar CEP', Component: CEPSearchPage, Layout: DefaultLayout },
  { path: '/chart-page', label: 'Chart Page', Component: ChartPage, Layout: DefaultLayout },
  { path: '/device-list', label: 'Device List', Component: DeviceListPage, Layout: DefaultLayout }
];

export default routes;
