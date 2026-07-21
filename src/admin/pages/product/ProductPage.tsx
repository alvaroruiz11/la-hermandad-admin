import { Navigate, useNavigate, useParams } from 'react-router';
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
import type { Product } from '@/products/interfaces/product.interface';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading, isError, mutation } = useProduct(id || '');

  const title =
    id === 'new' ? 'Agregar producto' : (product?.title ?? 'Editar producto');

  const handleSubmit = async (
    productLike: Partial<Product> & { categoryId: string },
  ) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        alert('Producto guardado');
        navigate(`/admin/products/${data.id}`, { replace: true });
      },
      onError(error) {
        console.log(error);
        alert('Error al guardar producto');
      },
    });
  };

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
        <ProductForm
          product={product}
          onSubmit={handleSubmit}
          isPending={mutation.isPending}
        />
      </div>
    </div>
  );
};

export default ProductPage;
