'use client';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Link from "next/link";
import React, { useState, useMemo } from "react";
import "./Bloggroup.css";
import { FaChevronRight, FaPlus, FaRegUser, FaRegFolderOpen } from "react-icons/fa";
import Loading from "@/app/loading";

const queryClient = new QueryClient();

const fetchPosts = async () => {
  const res = await fetch('https://www.ispecia.com/wp-json/wp/v2/posts?_embed');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();
  return posts.map(post => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    date: new Date(post.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    }),
    imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'assets/img/blog/default.png',
    author: post._embedded?.author?.[0]?.name || 'Admin',
    categories: post._embedded?.['wp:term']?.[0]?.map(term => term.name).join(", ") || 'Uncategorized',
    slug: post.slug,
  }));
};

const fetchCategories = async () => {
  const res = await fetch('https://www.ispecia.com/wp-json/wp/v2/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  const categories = await res.json();
  return categories.map(cat => ({ id: cat.id, name: cat.name }));
};

function BlogGroup() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [visiblePostsCount, setVisiblePostsCount] = useState(5);

  const { data: posts, isLoading: loadingPosts, error: postsError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const { data: categories, isLoading: loadingCategories, error: categoriesError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const loading = loadingPosts || loadingCategories;
  const error = postsError || categoriesError;

  const filteredPosts = useMemo(() => {
    return activeCategory
      ? posts?.filter(post => post.categories.includes(activeCategory.name))
      : posts;
  }, [posts, activeCategory]);

  const visiblePosts = useMemo(() => {
    return filteredPosts?.slice(0, visiblePostsCount);
  }, [filteredPosts, visiblePostsCount]);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {/* Category Navbar */}
      <div className="secondary-navbar">
        <div className="container">
          <ul className="category-navbar">
            <li>
              <button onClick={() => setActiveCategory(null)}>All Categories</button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button onClick={() => setActiveCategory(cat)}>{cat.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blog Area */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {visiblePosts.map((post) => (
                <div className="single-blog-inner" key={post.id}>
                  <div className="thumb">
                    <img src={post.imageUrl} alt={post.title} loading="lazy" />
                    <span className="date">{post.date}</span>
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li><FaRegUser /> By {post.author}</li>
                      <li><FaRegFolderOpen /> {post.categories}</li>
                    </ul>
                    <h2 className="title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <Link className="btn btn-border-base mt-3" href={`/blog/${post.slug}`}>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              ))}
              {visiblePostsCount < filteredPosts.length && (
                <div className="load-more">
                  <button className="btn btn-border-base mt-3" onClick={() => setVisiblePostsCount(prev => prev + 5)}>
                    Load More <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogGroup />
    </QueryClientProvider>
  );
}

export default App;
