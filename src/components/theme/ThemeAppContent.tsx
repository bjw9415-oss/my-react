import { useLang } from './LangContext';
import ThemeAppCard from './ThemeAppCard';
import { useTheme } from './ThemeContext';
import themeData from './data.json';

const cards = themeData.cards;

export default function ThemeAppContent() {
  const { theme } = useTheme();
  const { lang } = useLang();

  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {lang === 'ko' ? '환영합니다.' : 'Welcome to My App'}
        </h2>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          현재 테마:{' '}
          <span className="font-semibold">
            {theme === 'dark' ? '다크 모드 🌙' : '라이트 모드 ☀️'}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* key 로 인덱스는 좋은 방법 아님 */}
        {cards.map((card, index) => (
          <ThemeAppCard key={index} title={card.title} content={card.content} />
        ))}
      </div>

      <div className="mt-8">
        <h3
          className={`mb-4 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          버튼 예시
        </h3>
        <div className="flex gap-4">
          <button
            className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
              theme === 'dark'
                ? 'bg-blue-600! text-white hover:bg-blue-700'
                : 'bg-blue-500! text-white hover:bg-blue-600'
            }`}
          >
            Primary Button
          </button>
          <button
            className={`rounded-lg border-2 px-6 py-3 font-semibold transition-colors ${
              theme === 'dark'
                ? 'border-gray-600! text-white hover:bg-gray-700'
                : 'border-gray-300! text-gray-300 hover:bg-gray-100'
            }`}
          >
            Secondary Button
          </button>
        </div>
      </div>
    </main>
  );
}
