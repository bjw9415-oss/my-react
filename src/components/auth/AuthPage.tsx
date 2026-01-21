// components/auth/AuthPage.tsx
import { useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

export default function AuthPage() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>🔐 로그인/로그아웃 테스트</h1>
      <hr />

      {/* 삼항 연산자: user가 있으면 프로필, 없으면 로그인 폼 보여주기 */}
      {user ? <UserProfile /> : <LoginForm />}
    </div>
  );
}
