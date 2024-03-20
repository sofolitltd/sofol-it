
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client';
import { Post } from '@/types';

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
    {posts.map((post) => (
      <Link
        href={{
          pathname: `/blog/${post?.slug?.current}`,
        }}
        key={post._id}
      >
        <div className="flex flex-col rounded-md shadow-md overflow-hidden cursor-pointer">
          <div className="relative w-full h-60 md:h-48 lg:h-64">
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            )}
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className=" text-xs text-gray-600 bg-gray-200 px-2 py-0.5 rounded-md">
                {post.categories?.map((category) => category.title).join(' | ') || 'No categories'}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(post._createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="title-section flex flex-col h-12 overflow-hidden mt-2">
              <h1 className="text-lg text-black font-semibold overflow-hidden leading-6">
                <span className="line-clamp-2">{post.title}</span>
              </h1>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default BlogContent;
