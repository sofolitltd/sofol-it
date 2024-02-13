import React from 'react';
import Image from 'next/image';

const DesignDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto my-28 px-4">
      <h1 className="text-4xl font-semibold mb-16">Design Services</h1>
      
      {/* ui/ux */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image src="/services/ui-ux-design.jpeg" alt="UI/UX Design" width={500} height={350} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">UI/UX Design</h2>
          <p className="text-gray-700 leading-relaxed">
            Our UI/UX design services focus on creating intuitive and user-friendly interfaces
            for your digital products. We specialize in crafting seamless user experiences
            that enhance customer satisfaction and drive engagement.
          </p>
        </div>
      </div>
      
      {/* Graphic */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Graphic Design</h2>
          <p className="text-gray-700 leading-relaxed">
            Our graphic design services cover a wide range of visual assets, including logos,
            banners, ads, and more. We work closely with clients to develop visually
            stunning graphics that effectively communicate their brand identity and message.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/services/graphic-design.jpeg" alt="Graphic Design" width={500} height={350} className=' mt-4 md:mt-0 lg:mt-0'/>
        </div>
      </div>
      
      {/* branding */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image src="/services/branding.jpeg" alt="Branding" width={500} height={350} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Branding</h2>
          <p className="text-gray-700 leading-relaxed">
            Branding is crucial for establishing a strong identity and making a lasting
            impression on your audience. Our branding services include logo design, brand
            strategy, and brand identity development to help you stand out in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignDetailsPage;
