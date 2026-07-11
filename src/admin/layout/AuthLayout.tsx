import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { TopNav } from '../components/TopNav';
import { useThemeStore } from '@/shared/store/theme/theme-store';

const AuthLayout = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`flex h-screen ${theme === 'dark' ? 'dark' : ''} bg-background text-foreground`}
    >
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <header className="h-16 ">
          <TopNav />
        </header>
        <main className="flex-1 overflow-auto p-4 bg-muted dark:bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
