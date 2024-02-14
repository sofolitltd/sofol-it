// components/TrustedBySlider.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface TrustedBySliderProps {
  trustedImages: string[];
}

const TrustedBySlider: React.FC<TrustedBySliderProps> = ({ trustedImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    
    ],
  };

  return (
    <div className="container mx-auto  relative py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-2">Trusted By</h2>
      <p className=" text-base text-center text-gray-600 mb-6">
        Our Trusted Partners and Clients
      </p>

      <Slider {...settings}>
        {trustedImages.map((image, index) => (
          <div key={index} className=" px-2 py-2">
            <div className="overflow-hidden flex justify-center items-center mb-4 py-2">
              <Image
                src={image}
                alt={`Trusted by ${index}`}
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrustedBySlider;
