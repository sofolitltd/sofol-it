import React from 'react';
import TrustedBySlider from '@/components/home/trusted-by-slider';

const TrustedBySection: React.FC = () => {
  const trustedImages = [
    '/images/wellbeingclinic.png',
    '/images/admissioncoaching.png',
    '/images/saifacademy.png',
    '/images/affiliatedr.png',
    '/images/priyobanshkhali.png',
    '/images/petelementsbd.png',
    
    // Add more image URLs as needed
  ];

  return (
    <div className=''>
      <TrustedBySlider trustedImages={trustedImages} />
    </div>
  );
};

export default TrustedBySection;
