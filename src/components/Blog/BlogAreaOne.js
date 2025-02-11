'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaRegComments, FaRegUser } from 'react-icons/fa';
import './BlogAreaOne.css'; // Import the CSS file
import { FaAngleRight } from "react-icons/fa";


const BlogAreaOne = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://www.ispecia.com/wp-json/wp/v2/posts?_embed&per_page=6');
        const fetchedPosts = await res.json();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
    <div className="blog-area-container">
      <div className="blog-header">
        <h6 className="blog-subtitle" style={{color:"#86c545", fontWeight:"bold", fontSize:"20px"}}>Latest Blogs</h6>
        <h2 className="blog-title">
          Explore our <span className="highlight-text">insights</span>
        </h2>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div className='blog-card-container'>
          <div key={post.id} className="blog-card">
            <div className="card-image-container">
              <img
                src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'assets/img/blog/placeholder.png'}
                alt={post.title.rendered}
                className="card-image"
              />
            </div>
            <div className="card-content">
              <Link href={`/blog/${post.slug}`} className="card-title">
                {post.title.rendered}
              </Link>
              <div className="card-excerpt">
                  <p>
              <div
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                color: '#777777'
              }}
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />
              </p>
            
              </div>
               <div className="post-date" style={{color:"black", fontSize:"15px"}}>
                {new Date(post.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <div className="card-footer">
                <div className="author-info">
                  <FaRegUser className="icon" />
                  <span>{post._embedded?.author?.[0]?.name || 'Admin'}</span>
                </div>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`} >
            <div style={{ marginLeft: '20px', height: '40px', width: '40px', borderRadius: '50%', backgroundColor: '#86c446', color: 'white', textAlign: 'center', lineHeight: '40px', cursor: 'pointer'
            }}>
              <FaAngleRight />
            </div>
            </Link>
          </div>
       </div>
        ))}
      </div>
     
      <div className="view-all-button-container">
        <Link href="/blog" className="view-all-button">
          View All Blogs
        </Link>
      </div>
    </div>
    </>
  );
};

export default BlogAreaOne;
