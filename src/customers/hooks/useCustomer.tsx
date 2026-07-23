import { useQuery } from '@tanstack/react-query';
import { getCustomerByIdAction } from '../actions/get-customer-by-id.action';

export const useCustomer = (id: string) => {
  const query = useQuery({
    queryKey: ['customer', { id: id }],
    queryFn: () => getCustomerByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return {
    ...query,
  };
};
