import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Build high-performing and engaging websites that convert.',
    icon: 'https://tailwindui.com/img/logos/laravel.svg',
  },
  {
    title: 'Mobile App Development',
    description: 'Create native or cross-platform mobile apps that delight users.',
    icon: 'https://tailwindui.com/img/logos/react.svg',
  },
  {
    title: 'Digital Marketing',
    description: 'Reach your target audience and drive results through effective marketing strategies.',
    icon: 'https://tailwindui.com/img/logos/google-ads.svg',
  },
];

const Services: React.FC = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-md shadow-md p-4">
            <img src={service.icon} alt={service.title} className="mx-auto mb-4" width="64" height="64" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <button className="btn bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded-md">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;