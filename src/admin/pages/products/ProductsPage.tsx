import { AdminTitle } from '@/admin/components/AdminTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Tag } from 'lucide-react';
import { Link } from 'react-router';

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
            <div className="p-2 flex items-center justify-between border-b"></div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductsPage;
