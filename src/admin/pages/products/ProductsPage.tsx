import { Link } from 'react-router';
import { Plus, Tag } from 'lucide-react';

import { AdminTitle } from '@/admin/components/AdminTitle';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DataStatusFilter } from '@/shared/components/DataStatusFilter';
import { DataSort, type SortOption } from '@/shared/components/DataSort';
import { ProductsTable } from '@/products/components/ProductsTable';
import { SearchInput } from '@/shared/components/SearchInput';
import { useProducts } from '@/products/hooks/useProducts';

const productsSortOptions: SortOption[] = [
  {
    label: 'Nombre del producto',
    sort: 'title',
    directions: [
      { value: 'asc', label: 'A-Z' },
      { value: 'desc', label: 'Z-A' },
    ],
  },
  {
    label: 'Inventario',
    sort: 'inventoryQuantity',
    directions: [
      { value: 'asc', label: 'Ascendente' },
      { value: 'desc', label: 'Descendente' },
    ],
  },
  {
    label: 'Creado',
    sort: 'createdAt',
    directions: [
      { value: 'asc', label: 'Más antiguo primero' },
      { value: 'desc', label: 'Más reciente primero' },
    ],
  },
  {
    label: 'Actualizado',
    sort: 'updatedAt',
    directions: [
      { value: 'asc', label: 'Más antiguo primero' },
      { value: 'desc', label: 'Más reciente primero' },
    ],
  },
];

const ProductsPage = () => {
  const { data } = useProducts();

  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle title="Productos" Icon={Tag} />
        <Link
          to="/admin/products/new"
          className={buttonVariants({ size: 'sm' })}
        >
          <Plus /> Agregar producto
        </Link>
      </div>
      <div className="mt-3">
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="p-2 flex items-center justify-between border-b">
              <DataStatusFilter
                options={[
                  { value: undefined, label: 'Todos' },
                  { value: 'ACTIVE', label: 'Activos' },
                  { value: 'DRAFT', label: 'Borrador' },
                  { value: 'ARCHIVED', label: 'Archivados' },
                ]}
              />
              <div className="flex items-center gap-2">
                <SearchInput
                  className="max-w-xs"
                  placeholder="Buscar producto"
                />

                <DataSort options={productsSortOptions} />
              </div>
            </div>
            <ProductsTable products={data?.results || []} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductsPage;
