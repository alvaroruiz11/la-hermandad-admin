import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import type { Customer } from '@/customers/interfaces/customer.interface';

interface Props {
  customer: Customer;
}

export const CustomerForm = ({ customer }: Props) => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <Card>
            <CardContent>
              <FieldSet>
                <FieldLegend>Descripción general del cliente</FieldLegend>
                <FieldGroup>
                  <div className="grid md:grid-cols-2 gap-2">
                    <Field>
                      <FieldLabel htmlFor="firstName">Nombres</FieldLabel>
                      <Input type="text" id="firstName" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName">Apellido</FieldLabel>
                      <Input type="text" id="lastName" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                    <Input type="email" id="email" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">Teléfono</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>+591</InputGroupAddon>
                      <InputGroupInput
                        type="text"
                        id="phone"
                        placeholder="0000 0000"
                      />
                    </InputGroup>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-4">
          <Card>
            <CardContent>
              <FieldSet>
                <div className="flex items-center justify-between">
                  <FieldLegend>Notas</FieldLegend>
                  <Button variant="ghost" size="icon-sm">
                    <Pencil />
                  </Button>
                </div>
                <FieldDescription>
                  La notas son privadas y no compartirán con el cliente
                </FieldDescription>
              </FieldSet>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end mt-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
};
