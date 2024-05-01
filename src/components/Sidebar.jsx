import React from 'react';
import { Link } from 'react-router-dom';
import logoSrcLight from '../img/icons/lucas-pinheiro-logo1.jpg';
import maquina from '../img/icons/tearcircular_modelo_1.jpg'
function Sidebar({ isOpen, toggleSidebar }) {
  // Lista fictícia de dispositivos com imagens de exemplo
  const devices = [
    { id: 1, name: 'Sensor de Temperatura', status: 'Ativo', image: '/path/to/sensor-image.jpg' },
    { id: 2, name: 'Câmera de Segurança', status: 'Inativo', image: '/path/to/camera-image.jpg' },
    { id: 3, name: 'Detector de Movimento', status: 'Ativo', image: '/path/to/detector-image.jpg' },
    { id: 4, name: 'Controlador de Luzes', status: 'Inativo', image: '/path/to/light-controller-image.jpg' },
    { id: 5, name: 'Termostato Inteligente', status: 'Ativo', image: '/path/to/thermostat-image.jpg' }
  ];

  return (
    <div className={`sidebar-container ${isOpen ? '' : 'sidebar-collapsed'}`}>
      <div className="sidebar-header">

        <div className="sidebar-image-container">
          <a href="/todo_react_vite_deploy/chart-page">
            <img src={logoSrcLight} alt="Fábricas" style={{ width: '175px', height: '75px' }} />
          </a>
        </div>

        <div className="sidebar-toggle-container">
          <button onClick={toggleSidebar} className="btn btn-light">☰</button>
        </div>
      </div>
      <div id="device-list">
        <ul>
          {devices.map(device => (
            <li key={device.id} className="device-item">
              <Link to={`/device/${device.id}`} className="device-link">
                <div className="device-image" style={{ backgroundImage: `url(${maquina})` }}></div>
                <span className="device-info">{device.name} - Status: {device.status}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
