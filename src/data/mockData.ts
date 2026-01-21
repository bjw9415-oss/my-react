import product1 from '@/assets/product1.png';
import product2 from '@/assets/product2.png';
import product3 from '@/assets/product3.png';
import product4 from '@/assets/product4.png';
import product5 from '@/assets/product5.png';
import product6 from '@/assets/product6.png';
import product7 from '@/assets/product7.png';
import { type Product } from '@/pages/shopping/ProductCard';

// 경로에 맞게 수정

export const PRODUCT_LIST: Product[] = [
  {
    id: 'p-001',
    name: '버그를 Java라 버그잡는 개리씨 키링 개발...',
    imageUrl: product1,
    price: 12500,
  },
  {
    id: 'p-002',
    name: '우당탕탕 라이캣의 실험실 스티커 팩',
    imageUrl: product2,
    price: 3500,
  },
  { id: 'p-003', name: '딥러닝 개발자 무릎 담요', imageUrl: product3, price: 17500 },
  {
    id: 'p-004',
    name: '네 개발잡니다 개발자키링 금속키링',
    imageUrl: product4,
    price: 13500,
  },
  {
    id: 'p-005',
    name: 'Hack Your Life 개발자 노트북 파우치',
    imageUrl: product5,
    price: 36000,
  },
  {
    id: 'p-006',
    name: '[NEW] 위니브 개발자, 캐릭터 스티커팩 2종',
    imageUrl: product6,
    price: 5500,
  },
  {
    id: 'p-007',
    name: '제주코딩베이스캠프 코딩 연습장 세트',
    imageUrl: product7,
    price: 8000,
  },
];
