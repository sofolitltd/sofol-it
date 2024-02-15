import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import BlogContent from "./blog_content";


const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;


export default async function Blog() {
  const posts = await client.fetch(query);
  // console.log(posts)

  //
  return (
    <div className="mx-10 lg:mx-20 my-28 ">
      <BlogContent posts={posts} />
    </div>
  );
}
