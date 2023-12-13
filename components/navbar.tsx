import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center mx-auto w-full border px-6 lg:px-20 py-4 sticky top-0 bg-white ">
      <img src="/logo-black.png" alt="logo" className=" h-10" />

      <ul className=" flex">
        <li className="">
          <Link
            href="/"
            className=" hover:bg-purple-50 px-4 py-2 rounded-full transition"
          >
            Home
          </Link>
        </li>
        
        <li className="">
          <Link
            href="/contact"
            className=" hover:bg-purple-50 px-4 py-2 rounded-full transition"
          >
            Contact
          </Link>
        </li>
        <li className="">
          <Link
            href="/blog"
            className=" hover:bg-purple-50 px-4 py-2 rounded-full transition"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
