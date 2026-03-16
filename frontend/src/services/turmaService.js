import { api } from './api';

export const turmaService = {
  list() {
    return api.get('/turmas').then((r) => r.data);
  },
};
