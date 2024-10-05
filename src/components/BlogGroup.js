'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./Bloggroup.css";
import {
  FaChevronRight,
  FaPlus,
  FaRegUser,
  FaRegFolderOpen,
} from "react-icons/fa";

// Fetch posts and categories from WordPress API
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

const BlogGroup = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePostsCount, setVisiblePostsCount] = useState(5); // To control number of displayed posts

  // Fetch posts and categories on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchPosts();
        const fetchedCategories = await fetchCategories();
        setPosts(fetchedPosts);
        setCategories(fetchedCategories);
      } catch (err) {
        setError('Failed to load content.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisiblePostsCount(prevCount => prevCount + 5); // Increase number of visible posts by 5
  };

  const filteredPosts = activeCategory
    ? posts.filter(post => post.categories.includes(activeCategory.name))
    : posts;

  const visiblePosts = filteredPosts.slice(0, visiblePostsCount); // Show only the number of visible posts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* Secondary Navbar for Categories */}
      <div className="secondary-navbar">
        <div className="container">
          <ul className="category-navbar">
            <li>
              <button onClick={() => setActiveCategory(null)}>
                All Categories
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button onClick={() => setActiveCategory(cat)}>
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blog Group */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {visiblePosts.map((post) => (
                <div className="single-blog-inner" key={post.id}>
                  <div className="thumb">
                    <img src={post.imageUrl} alt={post.title} />
                    <span className="date">{post.date}</span>
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <FaRegUser /> By {post.author}
                      </li>
                      <li>
                        <FaRegFolderOpen /> {post.categories}
                      </li>
                    </ul>
                    <h2 className="title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <Link className="btn btn-border-base mt-3" href={`/blog/${post.slug}`}>
                      Touch More <FaPlus />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Load More Button */}
              {visiblePostsCount < filteredPosts.length && (
                <div className="load-more">
                  <button className="btn btn-border-base mt-3" onClick={handleLoadMore}>
                    Load More <FaChevronRight />
                  </button>
                </div>
              )}
            </div>

            
            {/* <div className="col-lg-4 col-12">
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGroup;
