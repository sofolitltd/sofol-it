import { groq } from "next-sanity";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Post, Category } from "@/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RichText } from "../rich_text";

interface Props {
  params: Promise<{
    slug: string;
  }>;
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

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;

  // Combined query to fetch main post, latest posts, and categories
  const query = groq`{
    "post": *[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->,
        title,
        "categories": categories[]->
    },
    "latestPosts": *[_type == "post" && slug.current != $slug] | order(_createdAt desc)[0...3]{
        _id,
        title,
        slug,
        mainImage,
        _createdAt
    },
    "categories": *[_type == "category"]{
        title
    }
  }`;

  const { post, latestPosts, categories } = await client.fetch(query, { slug });

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <article className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      <div className=" container mx-auto px-5 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <header className="mb-8">
              {/* Metadata Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mb-4 font-medium tracking-wide">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <span>{new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <div className="flex items-center gap-2">
                  {post.author?.image && (
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image src={urlFor(post.author.image).url()} layout="fill" objectFit="cover" alt={post.author.name} />
                    </div>
                  )}
                  <span>{post.author?.name}</span>
                  <span>•</span>
                  <span>{post.readTime || '5 min'} read</span> {/* Read time is mocked or needs field */}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
                {post.title}
              </h1>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm mb-10">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    layout="fill"
                    objectFit="cover"
                    alt={post.title}
                    priority
                    className="hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
            </header>

            <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed font-serif">
              <PortableText value={post.body} components={RichText} />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 pl-0 lg:pl-10">
            <div className="sticky top-24 lg:h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide">
              <BlogSidebar latestPosts={latestPosts} categories={categories} postTitle={post.title} />
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
