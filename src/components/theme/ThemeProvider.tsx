import React from 'react';

import { type Theme, ThemeContext } from './ThemeContext';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'dark';
  });

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    // console.log('setItem savedTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
