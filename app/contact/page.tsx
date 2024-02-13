// components/ContactPage.tsx
import React from "react";

const address = [
  {
    title: "Main office",
    location: "109/2, Purbo Shalban , Rangpur Sadar, 5400, Bangladesh",
    mobile: "+8801704340860",
    email: "sofolitltd@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="">
      <div className=" my-20 lg:my-28 items-end pt-8 px-8 lg:px-10 grid gap-x-4 gap-y-10 lg:grid-cols-2">
        {/* contact form */}
        <div className="flex">
          <div className="px-2 md:px-12">
            <p className="text-2xl font-bold text-gray-900 md:text-4xl">
              Get in touch
            </p>
            <p className="mt-2 text-lg text-gray-600">
              Our friendly team would love to hear from you.
            </p>
            <form action="" className="mt-8 space-y-4">
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone_number"
                >
                  Phone number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="tel"
                  id="phone_number"
                  placeholder="Phone number"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex mb-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  id="message"
                  placeholder="Leave us a message"
                  cols={3}
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <img
          alt="Contact us"
          className="hidden max-h-full w-full rounded-lg object-cover lg:block"
          src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>

      {/* Address */}
      <div className="rounded-lg bg-gray-100 mt-8">
        <div className="mx-auto px-12 lg:px-24 py-10">
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
