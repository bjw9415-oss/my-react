import React from 'react';

import type { Product } from './data/products';

interface UseProductFilterParams {
  products: Product[];
  category?: Product['category'];
  word?: string;
  priceRange?: number[];
}

export function useProductFilter({ products, category, word, priceRange }: UseProductFilterParams) {
  const filteredResults = React.useMemo(() => {
    let results = products;
    if (word) {
      results = products.filter(
        (product) => product.name.includes(word) || product.description.includes(word),
      );
    }

    if (category) {
      results = results.filter((product) => product.category === category);
    }

    if (priceRange) {
      results = results.filter(
        (product) => priceRange[0] <= product.price && product.price <= priceRange[1],
      );
    }

    return results;
  }, [category, priceRange, products, word]);

  return filteredResults;
}
