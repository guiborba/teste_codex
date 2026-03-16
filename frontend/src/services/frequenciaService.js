import { api } from './api';

export const frequenciaService = {
  list() {
    return api.get('/frequencias').then((r) => r.data);
  },
};
