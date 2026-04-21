import React from 'react';
import tmobileLogo from 'figma:asset/e543e0c6bfd2c67d5039527f884bf5367fa5c9c0.png';
import verizonLogo from 'figma:asset/bd04552f4b4be88e8d9ca1a4383edf0441c3ba10.png';
import attLogo from 'figma:asset/8b06c9f8ff61a0e7138f25860f85645c98cbca02.png';

export default function CarrierLogos() {
  return (
    <div className="flex items-center justify-center gap-16 lg:gap-20 pt-4 pb-10 lg:pt-5 lg:pb-12">
      <img 
        src={verizonLogo} 
        alt="Verizon" 
        className="h-4 lg:h-5 w-auto grayscale opacity-60 -mt-1" 
      />
      <img 
        src={attLogo} 
        alt="AT&T" 
        className="h-5.5 lg:h-6.5 w-auto grayscale opacity-60" 
      />
      <img 
        src={tmobileLogo} 
        alt="T-Mobile" 
        className="h-3.5 lg:h-4.5 w-auto grayscale opacity-60" 
      />
      <span className="text-gray-400 font-medium text-sm lg:text-base">
        And many more
      </span>
    </div>
  );
}