import { api } from './api';

export const notaService = {
  async overview() {
    const { data } = await api.get('/nota/overview');
    return data;
  },
};
