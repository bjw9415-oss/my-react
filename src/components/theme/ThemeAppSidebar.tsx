import { useTheme } from './ThemeContext';
// const menuItems = [
//   { icon: '🏠', label: 'Home' },
//   { icon: '📊', label: 'Dashboard' },
//   { icon: '👥', label: 'Users' },
//   { icon: '⚙️', label: 'Settings' },
//   { icon: '📧', label: 'Messages' },
// ];

import themeData from './data.json';

const menuItems = themeData.menuItems;

export default function ThemeAppSidebar() {
  const { theme } = useTheme();

  return (
    <aside
      className={`w-64 border-r p-4 text-white transition-colors ${
        theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
      }`}
    >
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full rounded-lg p-3 text-left transition-colors hover:bg-gray-700"
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
