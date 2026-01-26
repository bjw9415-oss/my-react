import React from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import type { Product } from '../productList/data/products';

export interface CartItem {
  item: Product;
  quantity: number;
}
interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  setQuantity: (cartItem: CartItem) => void;
  totalPrice: number;
  totalCount: number;
  clearItems: () => void;
}
const CartContext = React.createContext<CartContextValue>({
  items: [],
  addItem: () => {},
  setQuantity: () => {},
  totalPrice: 0,
  totalCount: 0,
  clearItems: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  // const [items, setItems] = React.useState<CartItem[]>([]);
  const [items, setItems] = useLocalStorage<CartItem[]>('cartItems', []);

  const addItem = React.useCallback(
    (product: Product) => {
      const existProduct = items.find((item) => item.item.id === product.id);

      if (existProduct) {
        // 개수만 올림
        const newItems = items.map((item) =>
          item.item.id === existProduct.item.id
            ? { item: item.item, quantity: item.quantity + 1 }
            : item,
        );
        setItems(newItems);
      } else {
        // 새로 추가
        setItems([...items, { item: product, quantity: 1 }]);
      }
    },
    [items, setItems],
  );

  const setQuantity = React.useCallback(
    (cartItem: CartItem) => {
      const existProduct = items.find((item) => item.item.id === cartItem.item.id);
      if (existProduct) {
        const newItems = items.map((item) =>
          item.item.id === existProduct.item.id
            ? { item: cartItem.item, quantity: cartItem.quantity }
            : item,
        );
        setItems(newItems);
      }
    },
    [items, setItems],
  );

  const totalPrice = React.useMemo(
    () =>
      items.reduce((prev, curr) => {
        return prev + curr.item.price * curr.quantity;
      }, 0),
    [items],
  );

  const totalCount = React.useMemo(() => items.length, [items.length]);

  const clearItems = React.useCallback(() => {
    setItems([]);
  }, [setItems]);

  const contextValue = React.useMemo(
    () => ({ items, addItem, setQuantity, totalPrice, totalCount, clearItems }),
    [addItem, clearItems, items, setQuantity, totalCount, totalPrice],
  );

  return <CartContext value={contextValue}>{children}</CartContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext 는 CartProvider 내부에서 사용해야 합니다.');
  }
  return context;
}
