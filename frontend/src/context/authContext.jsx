import { createContext, useContext, useMemo, useState } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const data = await authService.login({ email, password });
    setUser(data.user);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout, setUser }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser utilizado dentro do AuthProvider');
  return context;
}
