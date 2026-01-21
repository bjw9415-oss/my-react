import LangToggleButton from './LangToggleButton';
import { useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

export default function ThemeAppHeader() {
  const { theme } = useTheme();

  return (
    <header
      className={`border-b p-4 transition-colors ${
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800 text-white'
          : 'border-gray-200 bg-white text-gray-900'
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📝 My App</h1>
        <div className="flex gap-2">
          <ThemeToggleButton />
          <LangToggleButton />
        </div>
      </div>
    </header>
  );
}
