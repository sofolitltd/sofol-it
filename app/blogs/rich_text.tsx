import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";


export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center my-10">
          <Image
            src={urlFor(value).url()}
            alt="Post image"
            width={800}
            height={500}
            className="rounded-lg object-contain"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-6 py-4 list-disc space-y-2 text-gray-700 leading-relaxed">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-6 py-4 list-decimal space-y-2 text-gray-700 leading-relaxed">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="mb-4 text-lg text-gray-700 leading-8 text-justify">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl py-6 font-bold text-gray-900">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl py-6 font-bold text-gray-900">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl py-4 font-bold text-gray-900">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl py-4 font-bold text-gray-900">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-blue-600 border-l-4 pl-6 py-2 my-6 bg-gray-50 italic text-gray-800">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      // Robust URL extraction: check multiple possible property names
      const href = value?.href || value?.url || value?.uri || "#";
      const isExternal = href.startsWith("http") || /^https?:\/\//.test(href) || (!href.startsWith("/") && href !== "#");
      const rel = isExternal ? "noreferrer noopener" : undefined;
      const target = isExternal ? "_blank" : undefined;

      if (isExternal) {
        return (
          <a
            href={href}
            rel={rel}
            target={target}
            className="text-blue-600 hover:underline font-medium"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="text-blue-600 hover:underline font-medium"
        >
          {children}
        </Link>
      );
    },
  },
};
