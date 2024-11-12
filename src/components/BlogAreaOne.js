'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaRegComments, FaRegUser } from 'react-icons/fa';
import './BlogAreaOne.css'; // Import the CSS file

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
    return <div style={{ textAlign: 'center', padding: '1rem' }}>Loading...</div>;
  }

  return (
    <div style={{
      padding: '2rem 0',
      
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          <h6 style={{
            color: '#86c445',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '0.5rem'
          }}>
            Latest Blogs
          </h6>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#1F2937'
          }}>
            Explore our <span style={{ color: '#86c445' }}>insights</span>
          </h2>
        </div>
        
        {/* Grid Container - Added blog-grid class */}
        <div className="blog-grid" style={{
          display: 'grid',
          gap: '1rem'
        }}>
          {posts.map((post) => (
            <div key={post.id} style={{
              backgroundColor: '#ffffff',
              borderRadius: '0.375rem',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease',
            }}>
              {/* Image Container */}
              <div style={{
                position: 'relative',
                height: '8rem'
              }}>
                <img 
                  src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'assets/img/blog/placeholder.png'}
                  alt={post.title.rendered}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  backgroundColor: '#86c445',
                  color: '#ffffff',
                  padding: '0.25rem 0.5rem',
                  borderTopRightRadius: '0.375rem',
                  fontSize: '0.75rem'
                }}>
                  {new Date(post.date).toLocaleDateString(undefined, { 
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '0.75rem'
              }}>
                <Link 
                  href={`/blog/${post.slug}`}
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <h3 style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#86c445',
                    marginBottom: '0.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '2.5rem'
                  }}>
                    {post.title.rendered}
                  </h3>
                </Link>
                
                <div style={{
                  fontSize: '0.75rem',
                  color: '#4B5563',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '0.5rem'
                }}
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered
                  }}
                />
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.75rem',
                  color: '#6B7280',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid #E5E7EB'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FaRegUser style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      marginRight: '0.25rem'
                    }} />
                    <span style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '60px'
                    }}>
                      {post._embedded?.author?.[0]?.name || 'Admin'}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FaRegComments style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      marginRight: '0.25rem'
                    }} />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '1.5rem'
        }}>
          <Link 
            href="/blog" 
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#3B82F6',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#86c445'}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = 'Black';
            }}

          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogAreaOne;