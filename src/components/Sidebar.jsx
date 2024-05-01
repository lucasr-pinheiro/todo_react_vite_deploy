import React, { useState, useEffect } from 'react';
import DeviceList from '../components/DeviceList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  // Define um ponto de quebra para a largura da tela
  const breakpoint = 768;

  // Estado inicial baseado na largura da tela
  const [isOpen, setIsOpen] = useState(window.innerWidth > breakpoint);

  // Atualiza o estado baseado na largura da tela
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= breakpoint) {
        setIsOpen(false);
        document.documentElement.style.setProperty('--sidebar-width', '50px');
      } else {
        setIsOpen(true);
        document.documentElement.style.setProperty('--sidebar-width', '250px');
      }
    }

    // Adiciona o ouvinte de eventos quando o componente monta
    window.addEventListener('resize', handleResize);

    // Limpa o ouvinte quando o componente desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleSidebar() {
    setIsOpen(!isOpen);
    // Atualizar a variável CSS --sidebar-width baseada no estado
    document.documentElement.style.setProperty('--sidebar-width', isOpen ? '60px' : '250px');
  }

  return (
    <div className={`sidebar-container ${isOpen ? '' : 'sidebar-collapsed'}`}>
      <div id="device-list">
        <DeviceList />
      </div>
      <div className="toggle-btn-sidebar" onClick={toggleSidebar}>
        <div className="toggle-icon"></div>
      </div>
    </div>
  );
}

export default Sidebar;
