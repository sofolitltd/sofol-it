import React from 'react';
import Image from 'next/image';

const MarketingServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto my-28 px-4">
      <h1 className="text-4xl font-semibold mb-16">Marketing Services</h1>
      
      {/* Social Media Marketing */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image src="/services/social-media-marketing.jpeg" alt="Social Media Marketing" width={500} height={350} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Social Media Marketing</h2>
          <p className="text-gray-700 leading-relaxed">
            Our social media marketing services help businesses increase brand awareness,
            engage with their audience, and drive website traffic. From content creation to
            ad management, we'll help you make the most of your social presence.
          </p>
        </div>
      </div>
      
      {/* Search Engine Optimization */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Search Engine Optimization (SEO)</h2>
          <p className="text-gray-700 leading-relaxed">
            Improve your website's visibility in search engine results with our SEO services.
            We'll optimize your site's content, structure, and performance to rank higher
            in organic search results and attract more qualified traffic.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/services/seo.jpeg" alt="Search Engine Optimization (SEO)" width={500} height={350} className=' mt-4 md:mt-0 lg:mt-0'/>
        </div>
      </div>
      
      {/* Content Marketing */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image src="/services/content-marketing.jpeg" alt="Content Marketing" width={500} height={350} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">Content Marketing</h2>
          <p className="text-gray-700 leading-relaxed">
            Engage your audience and drive conversions with our content marketing services.
            From blog posts to videos, we'll create compelling content that resonates with
            your target audience and drives them to take action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingServicesPage;
