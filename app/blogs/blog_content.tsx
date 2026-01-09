
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client';
import { Post } from '@/types';

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  if (!posts || posts.length === 0) return (
    <div className="text-center py-20">
      <p className="text-gray-500 text-lg">No blog posts found at the moment.</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {posts.map((post) => (
        <article
          key={post._id}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
        >
          <Link href={`/blogs/${post.slug?.current}`} className="block relative h-56 md:h-64 overflow-hidden">
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </Link>

          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              <time dateTime={post._createdAt}>
                {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readTime || '5 min'} read</span>
            </div>

            <Link href={`/blogs/${post.slug?.current}`} className="block group-hover:text-blue-600 transition-colors mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug line-clamp-2">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
              Explore our latest insights and detailed guide about {post.title.toLowerCase()}. Learn more about why this matters for your business.
            </p>

            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                  {post.author?.name?.charAt(0) || 'S'}
                </div>
                <span className="text-sm font-semibold text-gray-700">{post.author?.name || 'Sofol IT'}</span>
              </div>

              <Link
                href={`/blogs/${post.slug?.current}`}
                className="text-gray-900 font-bold text-sm flex items-center gap-1 group/btn hover:text-blue-600 transition-colors"
              >
                Read More
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogContent;
