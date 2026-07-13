import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const AdminLayout = lazy(() => import('../layout/AuthLayout'));
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const ProductsPage = lazy(() => import('../pages/products/ProductsPage'));
const ProductPage = lazy(() => import('../pages/product/ProductPage'));

export const adminRouter: RouteObject = {
  path: '/admin',
  element: <AdminLayout />,
  handle: {
    breadcrumb: 'Inicio',
  },
  children: [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: 'products',
      element: <ProductsPage />,
    },
    {
      path: 'products/:id',
      element: <ProductPage />,
    },
    // {
    //   path: 'products/:id',
    //   element: <ProductPage />,
    //   handle: {
    //     breadcrumb: 'Producto',
    //   },
    // },
  ],
};
