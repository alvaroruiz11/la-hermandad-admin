import { createBrowserRouter, Navigate } from 'react-router';
import { authRouter } from './auth/router/auth-router';

export const appRouter = createBrowserRouter([
  // Auth
  { ...authRouter },

  {
    index: true,
    element: <Navigate to="/admin" />,
  },
]);
