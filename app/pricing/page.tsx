"use client";
import { useState } from "react";

type Service = {
  title: string;
  description: string[];
  priceUSD: string;
  priceBDT: string;
};

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const webDevelopmentServices: Service[] = [
    {
      title: "Portfolio Website",
      description: [
        "Domain & Hosting setup",
        "Custom Design",
        "Develop with Wordpress",
        "Basic SEO",
        "User Guide & Instructions",
      ],
      priceUSD: "$100",
      priceBDT: "৳80,000",
    },
    {
      title: "E-commerce Website",
      description: [
        "Domain & Hosting setup",
        "E-commerce Design",
        "Payment Gateway Integration",
        "Product Management ",
        "Advanced SEO",
      ],
      priceUSD: "$2500",
      priceBDT: "৳25,000",
    },
  ];

  const appDevelopmentServices: Service[] = [
    {
      title: "Educational App",
      description: [
        "User-Friendly Interface",
        "Course Management System",
        "Push Notifications",
        "App Submission",
        "BCustom Design",
      ],
      priceUSD: "$500",
      priceBDT: "৳50,000",
    },
    {
      title: "Quiz App",
      description: [
        "Interactive Quiz Interface",
        "Real-time Scoring",
        "Leaderboards",
        "Custom Quiz Creation",
        "Push Notifications",
      ],
      priceUSD: "$150",
      priceBDT: "৳15,000",
    },
  ];

  const digitalMarketingServices: Service[] = [
    {
      title: "Facebook Ads",
      description: [
        "Targeted Campaigns",
        "Audience Research",
        "Ad Creative Design",
        "Conversion Tracking",
        "Performance Reporting",
      ],
      priceUSD: "$100",
      priceBDT: "৳10,000",
    },
    {
      title: "YouTube Customization",
      description: [
        "Channel Setup",
        "SEO Optimization",
        "Thumbnail & Banner Design",
        "Content Strategy",
        "Growth Tracking",
      ],
      priceUSD: "$150",
      priceBDT: "৳15,000",
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
        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
        <ul className="text-gray-600 mb-4 space-y-1">
          {service.description.map((point, i) => (
            <li key={i} className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> {point}
            </li>
          ))}
        </ul>
        <div className="text-xl text-blue-600 font-bold my-6">
          {service.priceUSD} USD / {service.priceBDT} BDT
        </div>
        <a
          href="https://calendly.com/asifuzzamanreyad/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full text-black border border-blue-700 hover:text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </a>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-5 py-28">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Pricing</h2>
        <p className="text-base text-gray-600 mb-16">
          Explore various pricing options to grow your business.
        </p>
      </div>

      <div className="flex sm:grid-cols-2 justify-center gap-2 pb-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {activeTab === "all" && renderServices(allServices)}
        {activeTab === "web" && renderServices(webDevelopmentServices)}
        {activeTab === "app" && renderServices(appDevelopmentServices)}
        {activeTab === "marketing" && renderServices(digitalMarketingServices)}
      </div>
    </div>
  );
};

export default PricingPage;
