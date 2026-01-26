import clsx from 'clsx';

import { useCartContext } from '../contexts/CartProvider';

export default function CartHeader() {
  const { totalCount, clearItems } = useCartContext();

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        장바구니 ({totalCount}개 상품)
      </h2>
      <button
        className={clsx(
          'rounded-lg border-2 border-blue-500',
          'text-sm font-semibold text-blue-500',
          'px-3 py-1 transition-all',
          'hover:bg-blue-50 dark:hover:bg-blue-900',
          'disabled:cursor-not-allowed disabled:opacity-50',
        )}
        onClick={() => clearItems()}
      >
        전체 삭제
      </button>
    </div>
  );
}
