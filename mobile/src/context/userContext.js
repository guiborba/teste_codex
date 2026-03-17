import { createContext, useContext, useMemo, useState } from 'react';
import { mobileAuthService } from '../services/authService';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const data = await mobileAuthService.login(email, password);
    setUser(data.user);
  };

  const value = useMemo(() => ({ user, login, setUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser precisa do UserProvider');
  return ctx;
}
