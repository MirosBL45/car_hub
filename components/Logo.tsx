import Image from 'next/image';

import LogoImg from '@/public/logo.svg';

export default function Logo() {
  return (
    <Image
      src={LogoImg}
      alt="CarHub by Jovic Miroslav Frontend Developer"
      width={118}
      height={18}
      className="object-contain"
    />
  );
}
