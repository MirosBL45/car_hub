import Link from 'next/link';
import Image from 'next/image';

import Logo from './Logo';

import LogoImg from '@/public/logo.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* <Image
            src={LogoImg}
            alt="CarHub by Jovic Miroslav Frontend Developer"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <Logo />
        </div>
      </div>
    </footer>
  );
}