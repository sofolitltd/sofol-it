// components/ContactPage.tsx
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sofol IT",
  description: "Contact Sofol IT",
};

const address = [
  {
    title: "Main office",
    location: "109/2, Purbo Shalban , Rangpur Sadar, 5400, Bangladesh",
    mobile: "+8801704340860",
    email: "sofolitltd@gmail.com",
  },
];

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/sofolitltd",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@sofolitltd",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/sofolitltd",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sofolitltd",
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com/sofolitltd",
  },
  {
    name: "Github",
    url: "https://www.github.com/sofolitltd",
  },
];

export default function ContactPage() {
  return (
    <div className="py-28 px-5">
      {/* social */}
      {/* <div className="container mx-auto grid gap-x-20 gap-y-10 lg:grid-cols-2 justify-center items-center">         */}
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 md:text-4xl">
            Connect with Us
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Follow us on social media for updates and news.
          </p>

          {/*  */}
          <div className="mt-10 grid gap-x-20 gap-y-10 lg:grid-cols-2 justify-center items-center">
            {/* Card for Social Media Links */}
            <div className="p-6 border rounded-lg shadow-md bg-white h-full flex flex-col justify-between">
              <div className="space-y-4 ">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full rounded-md border border-gray-300 bg-transparent px-3 py-2  lg:py-5 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <img
              alt="Contact us"
              className="min-h-fit rounded-lg object-cover h-full" // Ensures the image fills the card height
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="container mx-auto rounded-lg bg-gray-100 mt-20">
        <div className="mx-auto px-10 lg:px-24 py-10">
          <div className="py-8">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">
                  Our Offices
                </p>
                <p className="w-full text-lg text-gray-600">
                  Find us at these locations.
                </p>
              </div>

              {/* address list */}
              <div className="space-y-4 divide-y-2">
                {address.map((address) => (
                  <div
                    key={address.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold text-gray-900">
                      {address.title}
                    </p>
                    <p className="w-full text-base  text-gray-600">
                      {address.location}
                    </p>
                    <div className="mb-2"></div>

                    <a href={`tel:${address.mobile}`}>
                      <p className="text-lg font-semibold text-gray-600">
                        {address.mobile}
                      </p>
                    </a>
                    <a href={`mailto:${address.email}`}>
                      <p className="text-lg font-semibold text-gray-600">
                        {address.email}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
