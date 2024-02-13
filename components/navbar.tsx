'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="text-white py-4 overflow-hidden absolute top-0 left-0 right-0 z-40 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/images/logo-black.png"
              alt="Sofol IT Logo"
              width={100}
              height={40}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
      
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="block text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-start justify-end">
          <div className="w-60 bg-white py-4 px-6 rounded-lg h-full shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <Image
                src="/images/logo-black.png"
                alt="Sofol IT Logo"
                width={80}
                height={40}
              />
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none focus:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col mt-10 space-y-1 ">
              <MobileNavLink href="/" onClick={closeMobileMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/services" onClick={closeMobileMenu}>
                Services
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={closeMobileMenu}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-black hover:text-purple-600">
    {children}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-black hover:text-purple-600 py-2"
  >
    {children}
  </Link>
);

export default Navbar;
