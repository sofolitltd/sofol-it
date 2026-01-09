import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import BlogContent from './blog_content';
import { Post } from '@/types';

// Revalidate every 60 seconds (optional, adjust as needed)
export const revalidate = 60;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

const Blog = async () => {
  const posts: Post[] = await client.fetch(query);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-5 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, tutorials, and insights from the Sofol IT team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 py-12">
        <BlogContent posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
