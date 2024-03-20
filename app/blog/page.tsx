"use client"

import React, { useEffect, useState } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import BlogContent from './blog_content';
import { Post } from '@/types';

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts: Post[] = await client.fetch(query);
        setPosts(fetchedPosts);
        setLoading(false); // Set loading to false when fetching is done

        fetchedPosts.forEach((post, index) => {
          console.log(`Title ${index + 1}: ${post.title}`);
        });
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchPosts();
  }, []); // Fetch posts only once on component mount

  return (
    <div className="mx-10 lg:mx-20 my-28">
      {loading ? ( // Render loading indicator if loading is true
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-200 h-80 animate-pulse rounded-md shadow-md"></div>
          ))}
        </div>
      ) : (
        <BlogContent posts={posts} />
      )}
    </div>
  );
};

export default Blog;

