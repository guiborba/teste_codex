import { api } from './api';

export const notaService = {
  list() {
    return api.get('/notas').then((r) => r.data);
  },
};
