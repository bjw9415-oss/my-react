import type { CartItem } from '../contexts/CartProvider';

interface OrderProductItemProps {
  cartItem: CartItem;
}

export default function OrderProductItem({ cartItem }: OrderProductItemProps) {
  const { item, quantity } = cartItem;
  const totalPrice = item.price * quantity;

  return (
    <div className="flex justify-between">
      <span className="text-gray-600 dark:text-gray-400">
        {item.name} x {quantity}
      </span>
      <span className="font-semibold">{totalPrice.toLocaleString()}원</span>
    </div>
  );
}
