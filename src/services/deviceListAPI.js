import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
});

// Definindo getDevices como um método de api
api.getDevices = async function (parentId) {
    try {
        const response = await this.post('/devicesTags', { parentId });
        if (response.data.status === 'success') {
            return response.data.data;  // Retorna os dados para uso posterior
        } else {
            throw new Error(response.data.message);  // Lança um erro com a mensagem de falha da API
        }
    } catch (error) {
        if (error.response) {
            // Erro retornado pela API
            console.error('Erro ao buscar dados:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else if (error.request) {
            // Erro ocorrido ao fazer a requisição
            console.error('Erro de rede ao buscar dados:', error.message);
            throw new Error("Backend desconectado");  // Pode ser uma falha de rede ou servidor não disponível
        } else {
            // Erros inesperados
            console.error('Erro ao buscar dados:', error.message);
            throw error;
        }
    }
};

export default api;
