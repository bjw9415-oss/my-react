import LikeButton from '@/pages/shopping/LikeButton';
import ProductName from '@/pages/shopping/ProductName';
import Thumbnaillimg from '@/pages/shopping/Thumbnaillimg';

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export interface ProductCardProps {
  product?: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <Thumbnaillimg product={product} />
      <div className="mt-4 flex items-start justify-between">
        <ProductName product={product} />
        <LikeButton />
      </div>
    </div>
  );
}
