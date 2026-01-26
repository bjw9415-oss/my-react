// import React from 'react';
import clsx from 'clsx';

import { Button } from '../components/Button';
import { type CartItem as CartItemType, useCartContext } from '../contexts/CartProvider';

interface CartItemProps {
  cartItem: CartItemType;
}
export default function CartItem({ cartItem }: CartItemProps) {
  const { setQuantity } = useCartContext();
  const { item, quantity } = cartItem;
  const totalPrice = item.price * quantity;

  return (
    <div className="flex gap-4 rounded-lg border p-4 dark:border-gray-700">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
        <div className="flex h-full items-center justify-center text-3xl">🖼️</div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-800 dark:text-white">{item.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.price.toLocaleString()}원
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              className={clsx(
                'h-8 w-8',
                'rounded-lg border dark:border-gray-600',
                'hover:bg-gray-100 dark:hover:bg-gray-700',
                'flex items-center justify-center',
              )}
              onClick={() => setQuantity({ item: cartItem.item, quantity: quantity - 1 })}
            >
              -
            </Button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <Button
              className={clsx(
                'h-8 w-8',
                'rounded-lg border dark:border-gray-600',
                'flex items-center justify-center',
                'hover:bg-gray-100 disabled:opacity-50 dark:hover:bg-gray-700',
              )}
              onClick={() => setQuantity({ item: cartItem.item, quantity: quantity + 1 })}
            >
              +
            </Button>
          </div>
          <Button className="rounded-lg bg-red-500 px-3 py-1 text-sm font-semibold text-white transition-all hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50">
            삭제
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-blue-600 dark:text-blue-400">
          {totalPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
