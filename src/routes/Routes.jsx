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
  { path: '/device-list', label: 'Device List', Component: ChartPage, Layout: PlainLayout }

];

const routesDevice = [

  { path: '/device-list/device/3', label: 'Device List', Component: DeviceListPage, Layout: PlainLayout }

];

export default routes;
