import CartHeader from './cart/CartHeader';
import CartItem from './cart/CartItem';
import { useCartContext } from './contexts/CartProvider';
import { usePageContext } from './contexts/PageProvider';

export default function Cart() {
  const { setPage } = usePageContext();
  const { items, totalPrice } = useCartContext();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <CartHeader />
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem cartItem={item} />
          ))}
        </div>
        <div className="rounded-lg border bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">결제 정보</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>상품 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>배송비</span>
              <span>
                <span className="text-green-600 dark:text-green-400">무료</span>
              </span>
            </div>
            <div className="border-t pt-2 dark:border-gray-700">
              <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-white">
                <span>총 결제금액</span>
                <span className="text-blue-600 dark:text-blue-400">
                  {totalPrice.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              className="flex-1 rounded-lg border-2 border-blue-500 px-4 py-2 font-semibold text-blue-500 transition-all hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-900"
              onClick={() => setPage('product')}
            >
              계속 쇼핑하기
            </button>
            <button
              className="flex-1 rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setPage('order')}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
