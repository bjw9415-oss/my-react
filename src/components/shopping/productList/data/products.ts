// 제품 타입 정의
export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'electronics' | 'fashion' | 'food' | 'home';
  description: string;
  image: string;
  stock: number;
  rating: number;
  reviews: number;
}

// 제품 데이터 (assets 폴더의 이미지 활용)
export const products: Product[] = [
  {
    id: 1,
    name: '무선 이어폰',
    price: 89000,
    category: 'electronics',
    description: '고품질 노이즈 캔슬링 무선 이어폰으로 깨끗한 음질을 경험하세요.',
    image: '/src/assets/product1.png',
    stock: 15,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: '스마트 워치',
    price: 299000,
    category: 'electronics',
    description: '건강 추적 및 알림 기능이 탑재된 최신 스마트 워치입니다.',
    image: '/src/assets/product2.png',
    stock: 8,
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    name: '캐주얼 티셔츠',
    price: 35000,
    category: 'fashion',
    description: '편안한 면 소재로 제작된 데일리 티셔츠입니다.',
    image: '/src/assets/product3.png',
    stock: 50,
    rating: 4.2,
    reviews: 89,
  },
  {
    id: 4,
    name: '유기농 스낵',
    price: 8900,
    category: 'food',
    description: '건강한 유기농 재료로 만든 간식입니다.',
    image: '/src/assets/product4.png',
    stock: 100,
    rating: 4.6,
    reviews: 342,
  },
  {
    id: 5,
    name: '아로마 캔들',
    price: 25000,
    category: 'home',
    description: '은은한 향기로 집안 분위기를 바꿔보세요.',
    image: '/src/assets/product5.png',
    stock: 30,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 6,
    name: '블루투스 스피커',
    price: 129000,
    category: 'electronics',
    description: '강력한 사운드를 자랑하는 휴대용 스피커입니다.',
    image: '/src/assets/product6.png',
    stock: 12,
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 7,
    name: '디자이너 백팩',
    price: 89000,
    category: 'fashion',
    description: '스타일리시한 디자인과 실용성을 모두 갖춘 백팩입니다.',
    image: '/src/assets/product7.png',
    stock: 20,
    rating: 4.9,
    reviews: 412,
  },
];

// 카테고리 목록
export const categories = [
  { id: 'electronics', name: '전자제품', icon: '💻' },
  { id: 'fashion', name: '패션', icon: '👕' },
  { id: 'food', name: '식품', icon: '🍎' },
  { id: 'home', name: '홈/리빙', icon: '🏠' },
] as const;

// 정렬 옵션
export const sortOptions = [
  { value: 'name', label: '이름순' },
  { value: 'price-asc', label: '가격 낮은순' },
  { value: 'price-desc', label: '가격 높은순' },
  { value: 'rating', label: '평점순' },
] as const;
