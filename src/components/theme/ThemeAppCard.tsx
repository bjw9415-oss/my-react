import { useTheme } from './ThemeContext';

interface ThemeAppCardProps {
  title?: string;
  content?: string;
}

export default function ThemeAppCard({ title, content }: ThemeAppCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg border p-6 shadow-md transition-colors ${
        theme === 'dark'
          ? 'border-gray-700 bg-gray-800 text-white'
          : 'border-gray-200 bg-white text-gray-900'
      }`}
    >
      <h3 className="mb-2 text-xl font-bold">{title ?? '-'}</h3>
      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{content}</p>
    </div>
  );
}
