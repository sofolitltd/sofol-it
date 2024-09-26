"use client";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  price: string;
};

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const webDevelopmentServices: Service[] = [
    {
      title: "Portfolio Website",
      description: "A beautiful portfolio to showcase your work.",
      price: "$500",
    },
    {
      title: "E-commerce Website",
      description:
        "A full-fledged e-commerce website with payment integration.",
      price: "$1500",
    },
  ];

  const appDevelopmentServices: Service[] = [
    {
      title: "Educational App",
      description: "An app for learning and teaching.",
      price: "$1000",
    },
    {
      title: "Quiz App",
      description: "An interactive quiz app for users.",
      price: "$800",
    },
  ];

  const digitalMarketingServices: Service[] = [
    {
      title: "Facebook Ads",
      description: "Run targeted Facebook ad campaigns.",
      price: "$300",
    },
    {
      title: "YouTube Customization",
      description: "Optimize your YouTube channel for growth.",
      price: "$200",
    },
  ];

  const allServices = [
    ...webDevelopmentServices,
    ...appDevelopmentServices,
    ...digitalMarketingServices,
  ];

  const renderServices = (services: Service[]) => {
    return services.map((service, index) => (
      <div
        key={index}
        className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <span className="text-blue-600 font-bold">{service.price}</span>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-5 py-28 ">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Pricing
        </h2>
        <p className=" text-base text-gray-600 mb-16">
          Explore various pricing to grow your business.
        </p>
      </div>

      <div className="flex sm:grid-cols-2 justify-center  gap-2 pb-8 ">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "web" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveTab("app")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "app" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          App Development
        </button>
        <button
          onClick={() => setActiveTab("marketing")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "marketing" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Digital Marketing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeTab === "all" && renderServices(allServices)}
        {activeTab === "web" && renderServices(webDevelopmentServices)}
        {activeTab === "app" && renderServices(appDevelopmentServices)}
        {activeTab === "marketing" && renderServices(digitalMarketingServices)}
      </div>
    </div>
  );
};

export default PricingPage;
