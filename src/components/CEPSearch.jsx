// components/CEPSearch.js
import { useState } from 'react';
import api from '../services/buscaCepAPI'; // Importar o serviço axios configurado

const CEPSearch = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({});

  const fetchCEP = async () => {
    if (cep.length === 8) {
      try {
        const response = await api.get(`${cep}/json/`);
        setAddress(response.data);
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        alert('Erro ao buscar o CEP. Por favor, tente novamente.');
      }
    } else {
      alert("Por favor, insira um CEP válido com 8 dígitos.");
    }
  };

  return (
    <div>
      <h2>Buscador de CEP</h2>
      <input
        type="text"
        placeholder="Digite o CEP..."
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))} // Adicionando filtro para aceitar somente números
      />
      <button onClick={fetchCEP}>Buscar</button>
      {address.logradouro && (
        <div>
          <p>Rua: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default CEPSearch;
