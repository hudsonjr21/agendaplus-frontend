import api from '../../api';
import { Cliente } from '../../../@types/cliente';

export const getClients = async (): Promise<Cliente[]> => {
  const response = await api.get<Cliente[]>('/clientes');
  return response.data;
};