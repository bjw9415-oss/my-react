// import React from 'react';
import { useDebounce } from '@/hooks/useDebounce';

import { useSearchContext } from './contexts/SearchProvider';
import ProductCard from './productList/ProductCard';
import Sidebar from './productList/Sidebar';
import { products } from './productList/data/products';
import { useProductFilter } from './productList/useProductFilter';

export default function ProductList() {
  const { word, category, priceRange } = useSearchContext();
  const debounceWord = useDebounce(word);
  const debouncePriceRange = useDebounce(priceRange);

  const filteredResults = useProductFilter({
    products,
    category,
    word: debounceWord,
    priceRange: debouncePriceRange,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <Sidebar />
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              전체 상품 ({filteredResults?.length ?? 0})
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
