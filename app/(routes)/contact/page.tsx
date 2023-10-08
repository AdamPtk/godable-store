import Image from 'next/image';

import Container from '@/components/ui/container';
import Button from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const ContactPage = () => {
  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-6 lg:mt-0">
          Contact us
        </h1>
        <hr className="my-4" />
        <div className="flex flex-col md:flex-row my-4 gap-4">
          <div className="w-full md:w-1/2">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="w-full md:w-1/2">
            <Input type="text" placeholder="Order ID" />
          </div>
        </div>
        <div className="w-full">
          <Textarea placeholder="Message" />
        </div>
        <div className="mt-5">
          <Button>Send</Button>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
