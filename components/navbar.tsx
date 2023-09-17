import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/ui/container';
import MainNav from '@/components/main-nav';
import NavbarActions from '@/components/navbar-actions';
import getCategories from '@/actions/get-categories';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <Container>
      <div className="relative px-4 sm:px-8 h-24 md:h-40 flex items-center justify-between">
        <MainNav data={categories} />
        <div className="h-28 w-28 md:h-48 md:w-48 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Link href="/">
            <Image
              fill
              src="/godable-logo.png"
              alt=""
              className="object-cover object-center"
            />
          </Link>
        </div>
        <NavbarActions />
      </div>
    </Container>
  );
};

export default Navbar;
