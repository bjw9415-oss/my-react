// 로그인 후 보여줄 화면 - 헤더용
import { useAuth } from './AuthContext';

export default function UserProfile() {
  const { user, logout } = useAuth();

  // ✨ 핵심: 유저 정보가 없으면 화면을 그리지 않고 탈출!
  // 이 코드가 있어야 밑에서 마음 놓고 user.name을 쓸 수 있습니다.
  if (!user) {
    return null;
  }

  return (
    <div style={{ background: '#f0f0f0', padding: '10px' }}>
      <span>
        👋 안녕하세요, <strong>{user.name}</strong>({user.email})님!
      </span>

      <button onClick={logout} style={{ marginLeft: '10px' }}>
        로그아웃
      </button>
    </div>
  );
}
