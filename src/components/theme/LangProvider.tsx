import React from 'react';

import { type Lang, LangContext } from './LangContext';

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>(() => {
    const savedLang = localStorage.getItem('lang') as Lang;
    return savedLang || 'ko';
  });

  React.useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === 'ko' ? 'en' : 'ko');
  };

  return <LangContext value={{ lang, toggleLang }}>{children}</LangContext>;
}
