import { api } from './api';

export const authService = {
  async overview() {
    const { data } = await api.get('/auth/overview');
    return data;
  },
};
