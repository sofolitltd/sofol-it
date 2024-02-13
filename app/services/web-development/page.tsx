import React from 'react';
import Image from 'next/image';

const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="container mx-auto my-28 px-4">
      <h1 className="text-4xl font-semibold mb-16">Web Development Services</h1>
      
      {/* E-commerce */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image src="/services/ecommerce.jpeg" alt="E-commerce Website" width={500} height={350} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">E-commerce Website</h2>
          <p className="text-gray-700 leading-relaxed">
            We specialize in developing custom e-commerce websites tailored to your business needs.
            Our solutions are built on WordPress, providing a flexible and scalable platform to
            showcase your products and drive online sales.
          </p>
        </div>
      </div>
      
      {/* Customization */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Customization</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team offers WordPress customization services to enhance the functionality and
            appearance of your website. Whether you need custom plugins, themes, or integrations,
            we can tailor your WordPress site to meet your unique requirements.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/services/customization.jpeg" alt="Customization" width={500} height={350} className=' mt-4 md:mt-0 lg:mt-0'/>
        </div>
      </div>
      
      {/* Redesign */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image src="/services/redesign.jpeg" alt="Redesign" width={500} height={350} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Redesign</h2>
          <p className="text-gray-700 leading-relaxed">
            Is your WordPress website in need of a refresh? Our redesign services can give your
            site a modern and professional look while improving usability and performance to
            better engage your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
