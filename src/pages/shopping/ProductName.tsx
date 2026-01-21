import React from 'react';

import type { Product } from '@/pages/shopping/ProductCard';

export interface ProductNameProps {
  product?: Product;
}

export default function ProductName({ product }: ProductNameProps): React.JSX.Element {
  return (
    <div className="text-left">
      <h3 className="text-sm text-gray-700">{product?.name}</h3>
      <p className="mt-1 text-lg font-bold text-gray-900">{product?.price.toLocaleString()}원</p>
    </div>
  );
}
