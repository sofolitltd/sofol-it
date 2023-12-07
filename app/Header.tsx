import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className=" mx-0 flex justify-between">
      <div className=" px-24 py-4 ">
        <Image
          src="/logo-black.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <p
        className=" text-5xl mt-11"
        >We create digital product</p>
      </div>
    </div>
  );
}

export default Header;
