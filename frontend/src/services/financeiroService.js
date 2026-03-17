import { api } from './api';

export const financeiroService = {
  listMensalidades() {
    return api.get('/mensalidades').then((r) => r.data);
  },
};
