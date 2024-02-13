// pages/index.tsx
'use client'

import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Slider/>
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url('/images/hero.png')` }}
        ></div>

        {/* Content */}
        <div className="container mx-auto text-center relative py-40 px-10">
          <h1 className="text-black text-4xl md:text-6xl font-bold mb-4">
            Grow Your Business
          </h1>
          <div className="">
            <p className="text-gray-700 text-lg md:text-xl mb-14">
              We specialize in helping businesses succeed online.
              <br />
              Let us help you reach your digital goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-gray-300 hover:text-gray-900 inline-block border border-gray-900"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

//
interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  imageUrl,
}) => {
  return (
    <div className="border border-gray-200 px-6 py-8 rounded-lg">
      <Link href={link}>
        <div className="relative h-32 md:h-40 lg:h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain"
            className=" p-2"
          />
        </div>
        <h3 className="text-xl font-semibold m-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div className="py-20 px-5 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
        <p className=" text-base text-gray-600 mb-16">
          Explore the various services we offer to help grow your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Design"
            description="Creative designs to elevate your brand's visual identity. Get eye-catching graphics and intuitive user interfaces."
            link="/services/design"
            imageUrl="/images/design.png"
          />
          <ServiceCard
            title="Web Development"
            description="Professional websites tailored to your needs. Responsive designs, fast loading times, and seamless user experiences."
            link="/services/web-development"
            imageUrl="/images/web-development.png"
          />
          <ServiceCard
            title="App Development"
            description="Custom mobile applications for iOS and Android. Reach your audience on the go with intuitive and feature-rich apps."
            link="/services/app-development"
            imageUrl="/images/app-development.png"
          />
          <ServiceCard
            title="Marketing"
            description="Effective strategies to boost your online presence. Reach your target audience and drive conversions with marketing techniques."
            link="/services/marketing"
            imageUrl="/images/marketing.png"
          />
        </div>
      </div>
    </div>
  );
};

//

const ContactSection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg md:text-xl mb-8">
          Ready to get started? Reach out to us today and let's discuss your
          project.
        </p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-gray-300 hover:text-gray-900"
        >
          Contact Now
        </Link>
      </div>
    </div>
  );
};



import React from 'react';
import TrustedBySlider from '../components/TrustedBySlider';

const Slider: React.FC = () => {
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
    <div className="  bg-gray-50">
      <TrustedBySlider trustedImages={trustedImages} />
    </div>
  );
};


// 
interface Testimonial {
  id: number;
  name: string;
  position: string;
  message: string;
  image: string;
}

interface ClientTestimonialsProps {
  title: string;
  subTitle: string;
  testimonials: Testimonial[];
}



const testimonialsData = [
  {
    id: 1,
    name: 'Afjal Hossain Hridoy',
    position: 'Co-Founder, Wellbeing Clinic',
    message: "Choosing Sofol IT for our app development was a game-changer. Their professionalism made the entire process smooth. Our app now stands out with its beautiful design and user-friendly interface.",
    image: '/images/hridoy.png',
  },
  {
    id: 2,
    name: 'Towfiqur Rahman',
    position: 'Founder, Doial',
    message: "Choosing Sofol IT for our app development was a game-changer. Their professionalism made the entire process smooth. Our app now stands out with its beautiful design and user-friendly interface.",
    image: '/images/tusar.png',
  },
  {
    id: 3,
    name: 'Ashiqur  Rahman',
    position: 'CEO, Petelementbd.com',
    message: "Working with Sofol IT was an absolute pleasure! Their team's expertise and attention to detail in a stunning website that perfectly represents our brand. Highly recommend their exceptional services.",
    image: '/images/ashik.png',
  },

];

const TestimonialSection: React.FC = () => {
  return (
    <div>
      <ClientTestimonials
        title="Client Testimonials"
        subTitle="See what our clients have to say about us."
        testimonials={testimonialsData}
      />
    </div>
  );
};


// 
const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ title, subTitle, testimonials }) => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-4">{title}</h2>
      <p className="text-lg text-gray-600 text-center mb-8">{subTitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="border border-gray-200 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




export default HomePage;


