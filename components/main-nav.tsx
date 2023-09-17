'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <nav className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500',
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden ml-4">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="border-none rounded-xl theme-button-bg"
        >
          {routes.map((route) => (
            <DropdownMenuItem key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-black',
                  route.active ? 'text-black' : 'text-neutral-500',
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MainNav;
