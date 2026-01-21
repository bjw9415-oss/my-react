import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { PRODUCT_LIST } from '../../data/mockData';
import { ProductCard } from './ProductCard';
import { ShoppingCartButton } from './ShoppingCartButton';

// 데이터 import

function ProductPage() {
  console.log(PRODUCT_LIST.map((p) => p.id));
  return (
    <div className="bg-white">
      <Header />

      <ShoppingCartButton />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {PRODUCT_LIST.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
