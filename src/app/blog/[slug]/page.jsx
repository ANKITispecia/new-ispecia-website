import Breadcrumb from "@/components/Breadcrumb";
import { notFound } from "next/navigation";
import CommentForm from "./CommentForm";  // Import the client component
import "./slug.css";

// Fetch post by slug
const fetchPostBySlug = async (slug) => {
  const res = await fetch(`https://www.ispecia.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);

  if (!res.ok) return null;

  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
};

const BlogPost = async ({ params }) => {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return notFound(); // Display 404 if no post is found
  }

  return (
    <>
      <Breadcrumb title={`Blog / ${post.title.rendered}`} />
      <div className="blog-post">
        {/* Render post title */}
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Display post featured image */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <img
            src={post._embedded['wp:featuredmedia'][0].source_url}
            alt={post.title.rendered}
          />
        )}

        {/* Render post content */}
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        {/* Post author */}
        <p>Written by: {post._embedded?.author?.[0]?.name || "Admin"}</p>

        {/* Post date */}
        <p>Published on: {new Date(post.date).toLocaleDateString()}</p>

        {/* Comment form */}
        <CommentForm postId={post.id} />  {/* Pass postId to CommentForm */}
      </div>
    </>
  );
};

export default BlogPost;
