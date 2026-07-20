import { Navigate, useParams } from 'react-router';
import { Archive, ChevronDown, Tag, Trash } from 'lucide-react';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { ProductForm } from './ui/ProductForm';
import { useProduct } from '@/products/hooks/useProduct';
import { ProductStatusBadge } from '@/products/components/ProductStatusBadge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { buttonVariants } from '@/components/ui/button';

const ProductPage = () => {
  const { id } = useParams();

  const { data: product, isLoading, isError } = useProduct(id || '');

  const title =
    id === 'new' ? 'Agregar producto' : (product?.title ?? 'Editar producto');

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AdminTitle title={title} Icon={Tag} prevHref="/admin/products" />
          {id !== 'new' && <ProductStatusBadge status={product.status} />}
        </div>
        {id !== 'new' && (
          <DropdownMenu>
            <DropdownMenuTrigger
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Más acciones
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52" align="center">
              <DropdownMenuItem>
                <Archive /> Archivar producto
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash /> Eliminar producto
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="mt-3">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
