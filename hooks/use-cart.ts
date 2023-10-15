import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';
import { toast } from 'react-hot-toast';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  updateItem: (data: Product, value: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Item already added to cart');
        }

        set({ items: [...currentItems, data] });
        toast.success('Item added to cart');
      },
      updateItem: (data, value) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (!existingItem) {
          return toast('Item not found');
        }

        const updatedItems = currentItems.map((item) =>
          item.id === data.id ? { ...item, cartQuantity: value } : item,
        );

        set({ items: updatedItems });
        toast.success('Item updated');
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success('Item removed from cart');
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
