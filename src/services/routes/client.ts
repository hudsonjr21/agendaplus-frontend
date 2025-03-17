import api from '../api';

export const getClients = async () => {
  const response = await api.get('/clientes');
  return response.data;
};

export const getClient = async (id: string) => {
  const response = await api.get(`/clientes/${id}`);
  return response.data;
};

export const createClient = async (clientData: any) => {
  const response = await api.post('/clientes', clientData);
  return response.data;
};

export const updateClient = async (id: string, clientData: any) => {
  const response = await api.put(`/clientes/${id}`, clientData);
  return response.data;
};

export const deleteClient = async (id: string) => {
  const response = await api.delete(`/clientes/${id}`);
  return response.data;
};