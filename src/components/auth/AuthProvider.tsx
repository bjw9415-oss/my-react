// 데이터 공급소
import React from 'react';

import { AuthContext, type User } from './AuthContext';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  const login = (name: string, email: string) => {
    setUser({ name, email });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
