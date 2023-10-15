'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShoppingCart } from 'lucide-react';

import { Product } from '@/types';
import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCart from '@/hooks/use-cart';

const formSchema = z.object({
  quantity: z.string() || z.number(),
});

interface InfoProps {
  data: Product;
}

type ProductFormValues = z.infer<typeof formSchema>;

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onSubmit = (formData: ProductFormValues) => {
    cart.addItem({ ...data, cartQuantity: Number(formData.quantity) });
  };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: '1',
    },
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <h1 className="text-3xl font-bold text-gray-900 mt-6 lg:mt-0">
            {data.name}
          </h1>
          <div className="mt-3 flex items-end justify-between">
            <div className="text-2xl text-gray-900">
              <Currency value={data?.price} />
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
              <h3 className="font-bold text-black">Size:</h3>
              <div>{data?.size?.name}</div>
            </div>
            <div className="flex items-center gap-x-4">
              <h3 className="font-bold text-black">Color:</h3>
              <div
                className="h-6 w-6 rounded-full border border-gray-600"
                style={{ backgroundColor: data?.color?.value }}
              />
            </div>
            <div className="flex items-center gap-x-4">
              <h3 className="font-bold text-black">Quantity:</h3>
              <div className="w-20">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="theme-elem-bg rounded-xl">
                          {Array.from(
                            { length: data.quantity < 10 ? data.quantity : 10 },
                            (_, i) => (
                              <SelectItem
                                key={i}
                                value={String(i + 1)}
                                className="cursor-pointer"
                              >
                                {i + 1}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <p className="text-red-700">
              Hurry! {data.quantity} last items in stock
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-3">
            <Button type="submit" className="flex items-center gap-x-2">
              Add to cart
              <ShoppingCart />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Info;
