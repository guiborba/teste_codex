import { createContext, useContext } from 'react';

const UserContext = createContext({
  user: {
    role: 'RESPONSAVEL',
  },
});

export function useUser() {
  return useContext(UserContext);
}
