'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>CustomButton</span>
    </button>
  );
}
