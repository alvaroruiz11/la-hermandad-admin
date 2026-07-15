import { laHermandadApi } from '@/api/la-hermandad-api';
import type { Product } from '../interfaces/product.interface';

const emptyProduct: Product = {
  id: 'new',
  title: '',
  description: '',
  price: '',
  trackInventory: true,
  inventoryQuantity: 0,
  sku: '',
  status: 'ACTIVE',
  category: null,
  compareAtPrice: null,
  costPrice: null,
};

export const getProductByIdAction = async (id: string): Promise<Product> => {
  if (!id) throw new Error('Id is required');
  if (id === 'new') return emptyProduct;

  try {
    const { data } = await laHermandadApi.get<Product>(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error al obtener el producto ${id}`);
  }
};
