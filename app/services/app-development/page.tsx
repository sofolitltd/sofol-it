import React from "react";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Develpment | Sofol IT",
  description: "App Development by Sofol IT",
};

const AppDevelopmentPage: React.FC = () => {
  return (
    <div className="container mx-auto my-28 px-4">
      <h1 className="text-4xl font-semibold mb-16">App Development Services</h1>

      {/* iOS App */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image
            src="/services/ios-app.jpeg"
            alt="iOS App Development"
            width={500}
            height={350}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">iOS App Development</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team specializes in developing custom iOS applications that are
            tailored to your business goals. From concept to deployment, we
            ensure your app meets the highest standards of performance,
            usability, and design.
          </p>
        </div>
      </div>

      {/* Android App */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">
            Android App Development
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We offer comprehensive Android app development services, leveraging
            the latest technologies and best practices to create robust and
            scalable applications. Whether you need a native or cross-platform
            solution, we've got you covered.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/services/android-app.jpeg"
            alt="Android App Development"
            width={500}
            height={350}
            className=" mt-4 md:mt-0 lg:mt-0"
          />
        </div>
      </div>

      {/* Cross-Platform App */}
      <div className="mb-12 flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-1/2">
          <Image
            src="/services/cross-platform-app.jpeg"
            alt="Cross-Platform App Development"
            width={500}
            height={350}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold my-4">
            Cross-Platform App Development
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Need your app to run on both iOS and Android? Our cross-platform app
            development services utilize frameworks like React Native to build
            high-performance apps that share a single codebase, reducing
            development time and costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentPage;
