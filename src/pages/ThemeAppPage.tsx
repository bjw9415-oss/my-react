import LangProvider from '@/components/theme/LangProvider';
import { ThemeLayout } from '@/components/theme/ThemeLayout';
import ThemeProvider from '@/components/theme/ThemeProvider';

export default function ThemeAppPage() {
  return (
    <LangProvider>
      <ThemeProvider>
        <ThemeLayout />
      </ThemeProvider>
    </LangProvider>
  );
}
