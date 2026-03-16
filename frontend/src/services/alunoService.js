import { api } from './api';

export const alunoService = {
  async overview() {
    const { data } = await api.get('/aluno/overview');
    return data;
  },
};
