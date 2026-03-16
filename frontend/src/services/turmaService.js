import { api } from './api';

export const turmaService = {
  async overview() {
    const { data } = await api.get('/turma/overview');
    return data;
  },
};
