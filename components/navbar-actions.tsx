'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-transparent px-4 py-2"
      >
        <ShoppingCart size={20} color="black" />
        <span className="ml-2 text-sm font-medium text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
