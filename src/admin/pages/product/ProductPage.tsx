import { Tag } from 'lucide-react';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { ProductForm } from './ui/ProductForm';

const ProductPage = () => {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <AdminTitle
        title="Agregar producto"
        Icon={Tag}
        prevHref="/admin/products"
      />
      <div className="mt-3">
        <ProductForm />
      </div>
    </div>
  );
};

export default ProductPage;
