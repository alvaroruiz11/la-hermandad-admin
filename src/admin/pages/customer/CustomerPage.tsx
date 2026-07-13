import { User } from 'lucide-react';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomerForm } from './ui/CustomerForm';

const CustomerPage = () => {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <AdminTitle
        title="Nuevo cliente"
        Icon={User}
        prevHref="/admin/customers"
      />
      <div className="mt-3">
        <CustomerForm />
      </div>
    </div>
  );
};

export default CustomerPage;
