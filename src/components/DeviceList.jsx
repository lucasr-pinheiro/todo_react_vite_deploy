import React, { useState, useEffect } from 'react';
import api from '../services/deviceListAPI';
import { Link } from 'react-router-dom'; // Import Link

const DeviceList = ({ isOpen }) => { // Adicione o prop isOpen se for passar diretamente para o componente
    const [devices, setDevices] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const parentId = 2;

    const fetchDevices = async () => {
        setError('');
        setIsLoading(true);
        try {
            const fetchedDevices = await api.getDevices(parentId);
            setIsLoading(false);
            if (!fetchedDevices || fetchedDevices.length === 0) {
                setError('Nenhum dispositivo encontrado.');
                setDevices([]);
            } else {
                setDevices(fetchedDevices);
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Erro ao buscar dispositivos:', error);
            setError('Não foi possível conectar ao backend. Verifique sua conexão ou tente novamente mais tarde.');
        }
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <div>
            {error ? (
                <p className="error-message">{error}</p>
            ) : isLoading ? (
                <p className="loading-message">Carregando dispositivos...</p>
            ) : devices.length > 0 ? (
                <ul>
                    {devices.map(device => (
                        <li key={device.id} className="device-item">
                            <div className="device-number">{device.numeroMaquina}</div>
                            <Link to={`/device-list/device/${device.id}`} className={`device-name ${!isOpen ? 'sidebar-collapsed' : ''}`}>
                                {device.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-devices">Nenhum dispositivo encontrado.</p>
            )}
        </div>
    );
};

export default DeviceList;
