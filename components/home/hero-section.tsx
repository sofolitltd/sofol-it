import Link from "next/link";

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

  export default HeroSection