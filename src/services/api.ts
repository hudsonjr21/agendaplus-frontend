import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const api = axios.create({
  baseURL: publicRuntimeConfig.NEXT_PUBLIC_AGENDAPLUS_URL,
});

export default api;