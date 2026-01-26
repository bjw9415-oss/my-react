import { useNavigate } from 'react-router';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Content className="flex flex-col gap-4">
        Home Page
        <button onClick={() => navigate('/cart')}>장바구니로 이동</button>
        <button onClick={() => navigate('/user-list')}>사용자 목록으로 이동</button>
        <button onClick={() => navigate('/theme-app')}>Theme App으로 이동</button>
        <button onClick={() => navigate('/product')}>Product Page로 이동</button>
        <button onClick={() => navigate('/shopping')}>Shopping 으로 이동 </button>
      </Content>
      <Footer />
    </div>
  );
}
