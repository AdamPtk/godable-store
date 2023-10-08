import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto my-4 flex justify-center gap-4">
        <Link
          href="privacy-policy"
          className="text-sm font-medium text-neutral-500 hover:text-black"
        >
          Privacy Policy
        </Link>
        <Link
          href="terms-and-conditions"
          className="text-sm font-medium text-neutral-500 hover:text-black"
        >
          Terms and conditions
        </Link>
      </div>
      <div className="mx-auto">
        <p className="text-center text-xs text-black">
          &copy; 2023 Godable, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
