'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import getProducts from '@/actions/get-products';

interface SummaryProps {
  stockError: boolean;
  setStockError: (value: boolean) => void;
}

const Summary: React.FC<SummaryProps> = ({ stockError, setStockError }) => {
  const [loading, setLoading] = useState(false);
  const shippingPrice = 17;
  const searchParams = useSearchParams();
  const cartItems = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = cartItems.reduce((total, item) => {
    if (item.cartQuantity) {
      return total + Number(item.price) * item.cartQuantity;
    }
    return total + Number(item.price);
  }, shippingPrice);

  const onCheckout = async () => {
    setLoading(true);
    const products = await getProducts({ isFeatured: true });

    cartItems.forEach((item) => {
      const cartProduct = products.find((product) => product.id === item.id);
      if (
        cartProduct?.quantity &&
        item.cartQuantity &&
        cartProduct?.quantity < item.cartQuantity
      ) {
        setStockError(true);
        toast.error(
          `There are only ${cartProduct.quantity} items left of ${cartProduct.color.name} ${cartProduct.size.name} ${cartProduct.name}`,
        );
      }
    });

    if (!stockError) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: cartItems.map((item) => item.id),
          orderProducts: [...cartItems],
        },
      );

      window.location = response.data.url;
    }

    setLoading(false);
  };

  return (
    <div className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4">
          <div className="text-base font-medium text-gray-900">Shipping</div>
          <Currency value={shippingPrice} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={loading || stockError || cartItems.length === 0}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
