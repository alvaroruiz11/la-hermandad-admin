import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Customer } from '../interfaces/customer.interface';

interface Props {
  customers: Customer[];
}

export const CustomersTable = ({ customers }: Props) => {
  return (
    <Table>
      <TableHeader className="bg-muted/50">
        <TableRow>
          <TableHead className="w-10">
            <Checkbox />
          </TableHead>
          <TableHead className="text-muted-foreground">
            Nombre del cliente
          </TableHead>
          <TableHead className="text-muted-foreground">Teléfono</TableHead>
          <TableHead className="text-muted-foreground">
            Fecha de creación
          </TableHead>
          <TableHead className="text-muted-foreground">Pedidos</TableHead>
          <TableHead className="text-muted-foreground">
            Importe gastado
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <span className="font-medium leading-none hover:underline">
                {customer.displayName}
              </span>
            </TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>
              <span>{customer.createdAt.toLocaleString()}</span>
            </TableCell>
            <TableCell>
              <span>{customer.numberOfOrders}</span>
            </TableCell>
            <TableCell>
              <span>{customer.amountSpent}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
