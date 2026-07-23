import { Link } from 'react-router';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Formatter } from '@/lib/formatter';

interface Props {
  categories: any[];
}

export const CategoriesTable = ({ categories }: Props) => {
  return (
    <Table>
      <TableHeader className="bg-muted/50">
        <TableRow>
          <TableHead className="w-10">
            <Checkbox />
          </TableHead>
          <TableHead className="text-muted-foreground">
            Nombre de la categoría
          </TableHead>
          <TableHead className="text-muted-foreground">Creación</TableHead>
          <TableHead className="text-muted-foreground">Actualización</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <Link
                className="font-medium leading-none hover:underline"
                to={`/admin/customers/${category.id}`}
              >
                {category.name}
              </Link>
            </TableCell>

            <TableCell>
              <span>{Formatter.dateTime(category.createdAt)}</span>
            </TableCell>

            <TableCell>
              <span>{Formatter.dateTime(category.updateAt)}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
