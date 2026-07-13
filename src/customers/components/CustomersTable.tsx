import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const CustomersTable = () => {
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
      <TableBody className="relative">
        {/* {true && (
          <div className="absolute inset-0 w-full h-full bg-muted/70"></div>
        )} */}
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>
            <span className="font-medium leading-none hover:underline">
              Juan Martinez
            </span>
          </TableCell>
          <TableCell>+591 78436806</TableCell>
          <TableCell>
            <span>25/06/2026</span>
          </TableCell>
          <TableCell>
            <span>34</span>
          </TableCell>
          <TableCell>
            <span>Bs 340.00</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
