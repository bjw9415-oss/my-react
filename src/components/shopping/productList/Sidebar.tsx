import React from 'react';

import { useSearchContext } from '../contexts/SearchProvider';

export default function Sidebar() {
  const { priceRange, setCategory, setPriceRange } = useSearchContext();

  const handleMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange((prev) => [Number(event.target.value), prev[1]]);
  };

  const handleMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange((prev) => [prev[0], Number(event.target.value)]);
  };

  return (
    <div className="lg:block">
      <aside className="w-64 space-y-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
        <div>
          <h3 className="mb-3 font-bold text-gray-800 dark:text-white">카테고리</h3>
          <div className="space-y-2">
            <button
              className="w-full rounded-lg bg-blue-100 p-2 text-left text-blue-700 transition-colors dark:bg-blue-900 dark:text-blue-300"
              onClick={() => setCategory(undefined)}
            >
              📦 전체
            </button>
            <button
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => setCategory('electronics')}
            >
              💻 전자제품
            </button>
            <button
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => setCategory('fashion')}
            >
              👕 패션
            </button>
            <button
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => setCategory('food')}
            >
              🍎 식품
            </button>
            <button
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => setCategory('home')}
            >
              🏠 홈/리빙
            </button>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-gray-800 dark:text-white">가격대</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                최소: {priceRange[0].toLocaleString()}원
              </label>
              <input
                min="0"
                max="300000"
                step="10000"
                className="w-full"
                type="range"
                value={priceRange[0]}
                onChange={handleMinRange}
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                최대: {priceRange[1].toLocaleString()}원
              </label>
              <input
                min="0"
                max="300000"
                step="10000"
                className="w-full"
                type="range"
                value={priceRange[1]}
                onChange={handleMaxRange}
              />
            </div>
            <button className="w-full rounded-lg bg-gray-200 p-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
              초기화
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
