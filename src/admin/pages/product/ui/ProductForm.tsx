import { Link } from 'react-router';
import { useForm, useWatch } from 'react-hook-form';
import { CircleQuestionMark, CloudUpload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Switch } from '@/components/ui/switch';
import type { Product } from '@/products/interfaces/product.interface';

interface Props {
  product?: Product;
}

interface FormInputs extends Product {
  categoryId?: string;
}

export const ProductForm = ({ product }: Props) => {
  const {
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>({
    defaultValues: product,
  });

  const trackInventory = useWatch({
    control,
    name: 'trackInventory',
  });

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 space-y-4">
          {/* Informacion general */}
          <Card>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel>Título</FieldLabel>
                  <Input
                    type="text"
                    placeholder="Empanada de Carne"
                    {...register('title', {
                      required: 'El título es requerido',
                    })}
                  />
                </Field>
                <Field>
                  <FieldLabel>Descripción</FieldLabel>
                  <Textarea
                    placeholder="Descripción del producto"
                    className="min-h-25 max-h-25"
                    {...register('description')}
                  ></Textarea>
                </Field>
                <Field>
                  <FieldLabel>Media</FieldLabel>
                  {/* bg-transparent dark:bg-input/30 */}
                  <div className="border border-dashed border-input flex flex-col items-center justify-center gap-4 rounded-xl p-6 text-balance bg-transparent dark:bg-input/30 hover:bg-muted/40 dark:hover:bg-input/20">
                    <div className="flex max-w-sm flex-col items-center gap-2">
                      <div className="mb-2 shrink-0 rounded-lg bg-muted text-foreground size-8 flex items-center justify-center">
                        <CloudUpload className="size-4" />
                      </div>
                      <p className="text-sm font-semibold">
                        Arrastra y suelta archivos aquí
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Imágenes o videos (JPG, PNG, GIF, MP4)
                      </p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        Subir archivo
                      </Button>
                    </div>
                  </div>
                </Field>

                <Field>
                  <FieldLabel>Categoría</FieldLabel>
                  <NativeSelect {...register('categoryId')}>
                    <NativeSelectOption value="">
                      Elija una categoría de producto
                    </NativeSelectOption>
                  </NativeSelect>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>

          {/* Precio */}
          <Card>
            <CardContent>
              <FieldSet>
                <FieldLegend>Precio</FieldLegend>
                <FieldGroup>
                  <Field className="w-fit">
                    {/* <Input type="text" placeholder="0.00" /> */}
                    <InputGroup>
                      <InputGroupAddon>Bs</InputGroupAddon>
                      <InputGroupInput
                        type="number"
                        placeholder="0.00"
                        {...register('price', {
                          required: 'El precio es requerido',
                          min: {
                            value: 0,
                            message: 'El precio debe ser mayor a 0',
                          },
                        })}
                      />
                    </InputGroup>
                  </Field>
                  <FieldSeparator />
                  <Field className="w-fit">
                    <FieldLabel>Precio de comparación</FieldLabel>
                    {/* <Input type="text" placeholder="0.00" /> */}
                    <InputGroup>
                      <InputGroupAddon>Bs</InputGroupAddon>
                      <InputGroupAddon align="inline-end">
                        <HoverCard>
                          <HoverCardTrigger>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground"
                            >
                              <CircleQuestionMark />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent>
                            El precio de comparación debe ser mayor al precio
                            del producto.
                          </HoverCardContent>
                        </HoverCard>
                      </InputGroupAddon>
                      <InputGroupInput
                        type="text"
                        placeholder="0.00"
                        {...register('compareAtPrice')}
                      />
                    </InputGroup>
                  </Field>
                  <FieldSeparator />
                  <div className="grid grid-cols-3 gap-2">
                    <Field>
                      <InputGroup>
                        <InputGroupAddon>Costo</InputGroupAddon>
                        <InputGroupInput
                          type="text"
                          placeholder="0.00"
                          {...register('costPrice')}
                        />
                      </InputGroup>
                    </Field>
                    <Field>
                      <InputGroup>
                        <InputGroupAddon>Beneficio</InputGroupAddon>
                        <InputGroupInput
                          type="text"
                          placeholder="--"
                          disabled
                        />
                      </InputGroup>
                    </Field>
                    <Field>
                      <InputGroup>
                        <InputGroupAddon>Margen</InputGroupAddon>
                        <InputGroupInput
                          type="text"
                          placeholder="--"
                          disabled
                        />
                      </InputGroup>
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>

          {/* Inventario */}
          <Card>
            <CardContent>
              <FieldSet>
                <div className="flex items-center justify-between">
                  <FieldLegend>Inventario</FieldLegend>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {trackInventory
                        ? 'Inventario con seguimiento'
                        : 'Inventario sin seguimiento'}
                    </span>
                    <Switch
                      size="sm"
                      checked={trackInventory}
                      onCheckedChange={(value) =>
                        setValue('trackInventory', value)
                      }
                    />
                  </div>
                </div>
                <FieldGroup>
                  {trackInventory && (
                    <div className="border rounded-xl">
                      <div className="px-3 py-1.5 flex items-center justify-between bg-muted/50 rounded-t-xl">
                        <span className="text-sm text-muted-foreground">
                          Cantidad
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Cantidad
                        </span>
                      </div>
                      <div className="px-3 py-1.5 flex items-center justify-between rounded-b-xl">
                        <span>Shop location</span>
                        <Input
                          type="number"
                          placeholder="0"
                          className="w-30"
                          {...register('inventoryQuantity')}
                        />
                      </div>
                    </div>
                  )}

                  <FieldSeparator />
                  <Field>
                    <FieldLabel>SKU (Código de artículo)</FieldLabel>
                    <Input type="text" {...register('sku')} />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-4 space-y-4">
          <Card>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel>Estado</FieldLabel>
                  <NativeSelect {...register('status')}>
                    <NativeSelectOption value="ACTIVE">
                      Activo
                    </NativeSelectOption>
                    <NativeSelectOption value="DRAFT">
                      Borrador
                    </NativeSelectOption>
                    <NativeSelectOption value="ARCHIVED">
                      Archivado
                    </NativeSelectOption>
                  </NativeSelect>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mt-4">
        <Link
          to="/admin/products"
          className={buttonVariants({ variant: 'outline' })}
        >
          Cancelar
        </Link>
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
};
