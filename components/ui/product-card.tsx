'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Expand, ShoppingCart } from 'lucide-react';
import { MouseEventHandler } from 'react';

import { Product } from '@/types';
import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group flex flex-col md:flex-row cursor-pointer p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl relative w-full md:w-2/3">
        <Image
          src={data?.images?.[0].url}
          alt="Image"
          fill
          className="aspect-square object-contain rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:ml-10">
        <div>
          <p className="font-semibold text-lg md:text-3xl">{data.name}</p>
          <p className="text-gray-500 text-sm md:text-xl">
            {data.category?.name}
          </p>
        </div>
        <div>
          <Currency className="text-lg md:text-2xl" value={data?.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
