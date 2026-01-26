import { useCartContext } from '../contexts/CartProvider';
import OrderProductItem from './OrderProductItem';

export default function OrderProduct() {
  const { items, totalCount, totalPrice } = useCartContext();

  return (
    <div className="rounded-lg border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
        주문 상품 ({totalCount}개)
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <OrderProductItem key={item.item.id} cartItem={item} />
        ))}
        <div className="border-t pt-3 dark:border-gray-700">
          <div className="flex justify-between text-xl font-bold">
            <span>총 결제금액</span>
            <span className="text-blue-600 dark:text-blue-400">
              {totalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
