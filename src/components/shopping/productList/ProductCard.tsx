import React from 'react';

import clsx from 'clsx';

import { useCartContext } from '../contexts/CartProvider';
import type { Product } from './data/products';

interface ProductCardProps {
  product?: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartContext();

  const addCartItem = () => {
    if (!product) return;
    addItem(product);
  };

  return (
    <div className="group cursor-pointer rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
        <span className="text-6xl">🖼️</span>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-gray-800 dark:text-white">{product?.name}</h3>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {product?.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {product?.price.toLocaleString()}원
            </p>
            <p className="text-xs text-gray-500">
              ⭐ {product?.rating} ({product?.reviews})
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">재고: {product?.stock}개</p>
          </div>
        </div>
        <button
          className={clsx(
            'font-semibold text-white transition-all',
            'bg-blue-500 px-4 py-2 hover:bg-blue-600',
            'w-full rounded-lg',
            'disabled:cursor-not-allowed disabled:opacity-50',
          )}
          onClick={addCartItem}
        >
          🛒 장바구니 담기
        </button>
      </div>
    </div>
  );
}
