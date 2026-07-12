import { Link } from 'react-router';
import { Plus, Tag } from 'lucide-react';

import { AdminTitle } from '@/admin/components/AdminTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DataStatusFilter } from '@/shared/components/DataStatusFilter';
import { DataSort, type SortOption } from '@/shared/components/DataSort';
import { ProductsTable } from '@/products/components/ProductsTable';

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
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle title="Productos" Icon={Tag} />
        <Button size="sm" render={<Link to="/admin/products/new" />}>
          <Plus /> Agregar producto
        </Button>
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
                <DataSort options={productsSortOptions} />
              </div>
            </div>
            <ProductsTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductsPage;
