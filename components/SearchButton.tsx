'use client';

import Image from 'next/image';

import { ClassProps } from '@/types';

import MagnifyingIcon from '@/public/magnifying-glass.svg';

export default function SearchButton({ otherClasses }: ClassProps) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={MagnifyingIcon}
        alt="submit"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
}
