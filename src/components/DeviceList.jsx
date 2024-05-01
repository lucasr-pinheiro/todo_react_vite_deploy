import React, { useState, useEffect } from 'react';
import api from '../services/deviceListAPI';

const DeviceList = () => {
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
            <h2>Lista de Dispositivos:</h2>
            {error ? (
                <p className="error-message"><i className="fas fa-exclamation-circle"></i>{error}</p>
            ) : isLoading ? (
                <p className="loading-message">Carregando dispositivos...</p>
            ) : devices.length > 0 ? (
                <ul>
                    {devices.map(device => (
                        <li key={device.id}>
                            ({device.numeroMaquina}) {device.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-devices"><i className="fas fa-search"></i>Nenhum dispositivo encontrado.</p>
            )}
        </div>
    );
};

export default DeviceList;