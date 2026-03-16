import { api } from './api';

export const financeiroService = {
  async overview() {
    const { data } = await api.get('/financeiro/overview');
    return data;
  },
};
