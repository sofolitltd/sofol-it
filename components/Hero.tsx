import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="container mx-auto px-4 py-32 text-white text-center">
        <h1 className="text-4xl font-bold mb-8">Empowering Your Business with Digital Solutions</h1>
        <p className="text-xl mb-8">We help businesses achieve their goals through innovative digital strategies and creative execution.</p>
        <button className="btn bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded-md">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
