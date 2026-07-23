import { Navigate, useParams } from 'react-router';
import { User } from 'lucide-react';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomerForm } from './ui/CustomerForm';
import { useCustomer } from '@/customers/hooks/useCustomer';

const CustomerPage = () => {
  const { id } = useParams();

  const { data: customer, isLoading, isError } = useCustomer(id || '');

  const title =
    id === 'new' ? 'Nuevo cliente' : (customer.displayName ?? 'Editar cliente');

  if (isError) {
    return <Navigate to="/admin/customers" replace />;
  }

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (!customer) {
    return <Navigate to="/admin/customers" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto w-full">
      <AdminTitle title={title} Icon={User} prevHref="/admin/customers" />
      <div className="mt-3">
        <CustomerForm customer={customer} />
      </div>
    </div>
  );
};

export default CustomerPage;
