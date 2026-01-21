// 로그인 전 보여줄 화면 - 메인용
import { useAuth } from './AuthContext';

export default function LoginForm() {
  const { login } = useAuth();
  const handleLogin = () => {
    login('홍길동', 't6oQY@example.com');
  };
  return (
    <div className="border-2 border-solid p-5">
      <h2>로그인 페이지</h2>
      <p>서비스를 이용하려면 로그인이 필요합니다.</p>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}
