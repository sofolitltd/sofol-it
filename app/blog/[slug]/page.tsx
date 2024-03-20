import { groq } from "next-sanity";
import { Post, Category } from "@/types"; // Import the Category type
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RichText } from "../rich_text";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
          slug
      }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

export default async function BlogDetails({ params: { slug } }: Props) {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->,
        title,
        "categories": categories[]-> // Fetch all categories
    }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <div className="mx-10 md:mx-40 lg:mx-56 my-28">
      {/* Title, Author, and Category Section */}
      <div className="text-black mb-6">

        {/* title */}
        <h1 className="text-3xl font-bold">{post.title}</h1>

        {/* categories */}
        <div className="mt-2">
          {post.categories && post.categories.length > 0 && (
            post.categories.map((category: Category, index: number) => (
              <span
                key={index}
                className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md mr-2"
              >
                {category.title} {/* Display category title */}
              </span>
            ))
          )}
        </div>

        
      </div>

      {/* Main Image */}
      <div className="w-full h-80 md:h-96 relative">
        <Image
          src={urlFor(post.mainImage).url()}
          layout="fill"
          objectFit="cover"
          alt="main image"
        />
      </div>

      {/* Body Content */}
      <div className="mt-6 mx-0 lg:mx-10">
        <PortableText value={post.body} components={RichText}/>
      </div>

      <div className=" bg-gray-200 h-[2px] my-8"></div>

      {/* author */}
      <div className="flex items-center ">
          {post.author?.image && (
            <div className="mr-4">
              <Image
                src={urlFor(post.author.image).url()}
                width={40}
                height={40}
                alt="Author's Image"
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <p className=" text-sm">{post.author?.name}</p>
            <p className="text-xs text-gray-500 mt-1">{new Date(post._createdAt).toLocaleString()}</p>
          </div>
        </div>
    </div>
  );
}
