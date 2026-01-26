import { Button } from './components/Button';
import { useCartContext } from './contexts/CartProvider';
import { usePageContext } from './contexts/PageProvider';
import { useSearchContext } from './contexts/SearchProvider';

export default function Header() {
  const { setPage } = usePageContext();
  const { word, setWord } = useSearchContext();
  const { items } = useCartContext();

  const totalQuantity = items.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <header className="sticky top-0 z-40 border-b bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">🛍️ Mini Shop</h1>
          </div>
          <div className="hidden flex-1 md:block md:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="제품 검색..."
                value={word}
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                onChange={(event) => setWord(event.target.value)}
              />
              <span className="absolute top-1/2 left-3 -translate-y-1/2">🔍</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              className="relative rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="장바구니"
              onClick={() => setPage('cart')}
            >
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalQuantity}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
