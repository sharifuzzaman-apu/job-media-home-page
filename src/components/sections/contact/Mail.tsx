'use client';

import Image from 'next/image';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const Mail = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-14 text-center">
      <Image src="/mail.svg" height={400} width={600} alt="mail" />

      <p className="mt-4 text-2xl font-bold text-text-color">
        Provide Your Email
      </p>
      <p className="text-gray-600">So you never miss an update</p>

      <div className="mt-4 flex w-full max-w-[460px] items-center gap-2 px-4">
        <Input
          type="email"
          placeholder="Your Email"
          className="rounded-full text-center"
        />
        <Button className="rounded-full px-6">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Mail;
