'use client';

import Image from 'next/image';

import { CustomButton } from './';

import HeroImg from '@/public/hero.png';

export default function Hero() {
  function handleScroll() { }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easly
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental expirience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={HeroImg}
            alt="hero by Jovic Miroslav Frontend Developer"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}
