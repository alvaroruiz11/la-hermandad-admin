import { Image } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const ProductsTable = () => {
  return (
    <Table>
      <TableHeader className="bg-muted/50">
        <TableRow>
          <TableHead className="w-10">
            <Checkbox />
          </TableHead>
          <TableHead className="text-muted-foreground">Producto</TableHead>
          <TableHead className="text-muted-foreground">Estado</TableHead>
          <TableHead className="text-muted-foreground">Inventario</TableHead>
          <TableHead className="text-muted-foreground">Categoría</TableHead>
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
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-sm border w-9 h-9 dark:bg-muted">
                <Image className="text-muted-foreground size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium leading-none hover:underline">
                  Empanda de Carne
                </span>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <Badge className="capitalize text-emerald-800 bg-emerald-200 dark:text-emerald-200 dark:bg-emerald-800/40">
              Activo
            </Badge>
          </TableCell>
          <TableCell>
            <span>1200</span>
          </TableCell>
          <TableCell>
            <span>Almuerzo</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-sm border w-9 h-9 dark:bg-muted">
                <Image className="text-muted-foreground size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium leading-none hover:underline">
                  Empanda de Carne
                </span>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <Badge className="capitalize text-emerald-800 bg-emerald-200 dark:text-emerald-200 dark:bg-emerald-800/40">
              Activo
            </Badge>
          </TableCell>
          <TableCell>
            <span>1200</span>
          </TableCell>
          <TableCell>
            <span>Almuerzo</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
