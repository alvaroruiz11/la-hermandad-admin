import { Link } from 'react-router';
import { Plus, User } from 'lucide-react';

import { AdminTitle } from '@/admin/components/AdminTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { DataSort, type SortOption } from '@/shared/components/DataSort';
import { CustomersTable } from '@/customers/components/CustomersTable';

const customersSortOptions: SortOption[] = [
  {
    label: 'Nombre del cliente',
    sort: 'firstName',
    directions: [
      { value: 'asc', label: 'A-Z' },
      { value: 'desc', label: 'Z-A' },
    ],
  },
  {
    label: 'Apellido del cliente',
    sort: 'lastName',
    directions: [
      { value: 'asc', label: 'A-Z' },
      { value: 'desc', label: 'Z-A' },
    ],
  },
  {
    label: 'Email',
    sort: 'email',
    directions: [
      { value: 'asc', label: 'A-Z' },
      { value: 'desc', label: 'Z-A' },
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

const CustomersPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle title="Clientes" Icon={User} />
        <Button size="sm" render={<Link to="/admin/customers/new" />}>
          <Plus /> Agregar cliente
        </Button>
      </div>
      <div className="mt-3">
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="p-2 flex items-center justify-between border-b">
              <DataSort options={customersSortOptions} />
            </div>
            <CustomersTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CustomersPage;
