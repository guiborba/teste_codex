import { api } from './api';

export const alunoService = {
  list() {
    return api.get('/alunos').then((r) => r.data);
  },
};
