import { useTheme } from './ThemeContext';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`rounded-lg px-4 py-2 font-semibold text-white transition-all ${
        theme === 'dark' ? 'bg-yellow-400 hover:bg-yellow-300' : 'bg-gray-700 hover:bg-gray-600'
      }`}
    >
      {theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드'}
    </button>
  );
}
