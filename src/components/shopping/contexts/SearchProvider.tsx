import React from 'react';

import type { Product } from '../productList/data/products';

interface SearchContextValue {
  word?: string;
  setWord: React.Dispatch<React.SetStateAction<string | undefined>>;
  category?: Product['category'];
  setCategory: React.Dispatch<
    React.SetStateAction<'electronics' | 'fashion' | 'food' | 'home' | undefined>
  >;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}

const SearchContext = React.createContext<SearchContextValue>({
  priceRange: [0, 300000],
  setWord: () => {},
  setCategory: () => {},
  setPriceRange: () => {},
});

interface SearchProviderProps {
  children: React.ReactNode;
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [word, setWord] = React.useState<string>();
  const [category, setCategory] = React.useState<Product['category']>();
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 300000]);

  const contextValue = React.useMemo(
    () => ({
      word,
      setWord,
      category,
      setCategory,
      priceRange,
      setPriceRange,
    }),
    [category, priceRange, word],
  );

  return <SearchContext value={contextValue}>{children}</SearchContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearchContext() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext 는 SearchProvider 내부에서 사용해야 합니다.');
  }
  return context;
}
