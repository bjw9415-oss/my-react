import React from 'react';

export type Lang = 'ko' | 'en';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

export const LangContext = React.createContext<LangContextType>({
  lang: 'ko',
  toggleLang: () => {},
});

export function useLang() {
  const context = React.useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}
