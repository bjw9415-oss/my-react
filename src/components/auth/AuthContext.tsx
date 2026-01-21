// 데이터 정의 & 혹
import React from 'react';

//유저 정보 타입 정의
export type User = {
  name: string;
  email: string;
};
// Context 에서 사용할 데이터와 함수 타입 정의
export interface AuthContextProps {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextProps | null>(null);

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('하위 컴포넌트에서만 인증데이터를 가져 갈 수 있습니다.');
  }
  return context;
}
