import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";
import { Post, Category } from "@/types";
import { ShareButtons } from "./share-buttons";

interface BlogSidebarProps {
    latestPosts: Post[];
    categories: Category[];
    postTitle: string;
}

export const BlogSidebar = ({ latestPosts, categories, postTitle }: BlogSidebarProps) => {
    return (
        <div className="flex flex-col h-full gap-6">
            {/* Latest Post Widget - Scrollable area if needed */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-shrink-1 overflow-y-auto scrollbar-hide">
                <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-2">Latest Post</h3>
                <div className="space-y-6">
                    {latestPosts?.map((post) => (
                        <Link key={post._id} href={`/blogs/${post.slug.current}`} className="flex gap-4 group">
                            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                                {post.mainImage && (
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={post.title}
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                )}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 leading-snug">
                                    {post.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-2">
                                    {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Social Share Widget - Fixed at bottom */}
            <div className="mt-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-shrink-0">
                <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-2">Share This Post</h3>
                <ShareButtons title={postTitle} sidebar={true} />
            </div>
        </div>
    );
};
