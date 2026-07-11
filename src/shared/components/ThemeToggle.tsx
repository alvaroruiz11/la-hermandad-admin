import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useThemeStore } from '../store/theme/theme-store';

export const ThemeToggle = () => {
  const hydrated = useThemeStore.persist.hasHydrated();
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  if (!hydrated) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full transition-colors"
    >
      <Sun className="size-5 text-neutral-600 dark:text-neutral-300 transition-all dark:hidden" />
      <Moon className="size-5 text-neutral-600 dark:text-neutral-300 transition-all hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
