import { RouterProvider } from 'react-router';

import { appRouter } from './app-router';
import { ThemeProvider } from './components/theme-provider';

export const LaHermandadAdminApp = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};
