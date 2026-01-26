import clsx from 'clsx';

import { Button } from '../components/Button';
import { useCartContext } from '../contexts/CartProvider';
import { usePageContext } from '../contexts/PageProvider';

export default function ContinueButton() {
  const { setPage } = usePageContext();
  const { clearItems } = useCartContext();

  const handleContinue = () => {
    clearItems();
    setPage('product');
  };

  return (
    <Button
      className={clsx(
        'text-lg font-semibold text-white transition-all',
        'bg-blue-500 hover:bg-blue-600',
        'w-full rounded-lg px-6 py-3',
        'disabled:cursor-not-allowed disabled:opacity-50',
      )}
      onClick={handleContinue}
    >
      쇼핑 계속하기
    </Button>
  );
}
