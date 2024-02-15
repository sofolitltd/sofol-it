import Link from "next/link";
import Image from "next/image";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaGithub 
} from "react-icons/fa";



export default function  Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/logo-white.png"
          alt="Your Agency Logo"
          width={110}
          height={40}
          className="mb-2"
        />{" "}
        {/* Menu */}
        <nav className="flex flex-wrap justify-center md:justify-end">
          <Link href="/" className="text-gray-300 hover:text-white px-4 py-2">
            Home
          </Link>

          <Link
            href="/services"
            className="text-gray-300 hover:text-white px-4 py-2"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white px-4 py-2"
          >
            Contact
          </Link>
        </nav>
        {/* Menu */}
        <nav className="flex flex-wrap justify-center md:justify-end">
          <Link
            href="/privacy-policy"
            className="text-gray-300 hover:text-white px-4 py-2"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="text-gray-300 hover:text-white px-4 py-2"
          >
            Terms & Conditions
          </Link>
        </nav>
        {/* Social share icons */}
        <div className="flex mt-4 md:mt-0 gap-x-4">
          <a
            href="https://www.youtube.com/@sofolitltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/sofolitltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/sofolitltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/sofolitltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.pinterest.com/sofolitltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaPinterest />
          </a>
          <a
            href="https://www.github.com/sofolitltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-sm justify-center">
        <p className=" text-gray-300">&copy; 2024 SOFOL IT | All Rights Reserved</p>
      </div>
    </footer>
  );
};


