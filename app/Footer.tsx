import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className=" fixed bottom-0 px-24 py-10">
      <Image
        src="/logo-black.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <p className=" m-3 "> Leading Digital Agency</p>
    </div>
  );
}

export default Footer;
