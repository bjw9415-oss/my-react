import Cart from '@/components/shopping/Cart';
import Footer from '@/components/shopping/Footer';
import Header from '@/components/shopping/Header';
import Order from '@/components/shopping/Order';
import OrderComplete from '@/components/shopping/OrderComplete';
import ProductList from '@/components/shopping/ProductList';
import CartProvider from '@/components/shopping/contexts/CartProvider';
import PageProvider, { usePageContext } from '@/components/shopping/contexts/PageProvider';
import SearchProvider from '@/components/shopping/contexts/SearchProvider';

export default function ShoppingPage() {
  return (
    <SearchProvider>
      <CartProvider>
        <PageProvider>
          <Main />
        </PageProvider>
      </CartProvider>
    </SearchProvider>
  );
}

function Main() {
  const { page } = usePageContext();

  return (
    <div className="min-h-screen w-[90vw] bg-gray-900 transition-colors">
      <Header />
      {page === 'product' && <ProductList />}
      {page === 'cart' && <Cart />}
      {page === 'order' && <Order />}
      {page === 'complete' && <OrderComplete />}
      <Footer />
    </div>
  );
}
