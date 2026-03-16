import { api } from './api';

export const frequenciaService = {
  async overview() {
    const { data } = await api.get('/frequencia/overview');
    return data;
  },
};
