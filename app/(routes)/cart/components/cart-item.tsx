import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { X } from 'lucide-react';

import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';

interface CartItemProps {
  data: Product;
  setStockError: (value: boolean) => void;
}

const CartItem: React.FC<CartItemProps> = ({ data, setStockError }) => {
  const cart = useCart();

  const handleQuantityChange = (value: string) => {
    setStockError(false);
    const val = Number(value);

    if (val < 1) {
      toast.error('Quantity must be at least 1');
      return;
    }

    cart.updateItem(data, val);
  };

  const handleRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex flex-col sm:flex-row py-6 border-b">
      <Link href={`/product/${data.id}`}>
        <div className="relative ml-4 sm:ml-0 mb-4 sm:mb-0 h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
          <Image
            fill
            src={data.images[0].url}
            alt=""
            className="object-cover object-center"
          />
        </div>
      </Link>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={handleRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex items-center text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-gray-200 pl-4">
              {data.size.name}
            </p>
            <p className="text-gray-500 ml-4 border-gray-200 pl-4 w-20">
              <Select
                value={String(data.cartQuantity)}
                onValueChange={(value) => handleQuantityChange(value)}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
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
            </p>
          </div>
          <Currency
            value={
              data.cartQuantity ? data.price * data.cartQuantity : data.price
            }
          />
        </div>
        <p className="text-red-700">Last items in stock</p>
      </div>
    </li>
  );
};

export default CartItem;
