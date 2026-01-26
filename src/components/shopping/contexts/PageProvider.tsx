import React from 'react';

import type { PageType } from '../types';

interface PageContextValue {
  page: PageType;
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
}

const PageContext = React.createContext<PageContextValue>({
  page: 'product',
  setPage: () => {},
});

interface PageProviderProps {
  children: React.ReactNode;
}

export default function PageProvider({ children }: PageProviderProps) {
  const [page, setPage] = React.useState<PageType>('product');

  const contextValue = React.useMemo(
    () => ({
      page,
      setPage,
    }),
    [page],
  );

  return <PageContext value={contextValue}>{children}</PageContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  const context = React.useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext 는 PageProvider 내부에서 사용해야 합니다.');
  }
  return context;
}
