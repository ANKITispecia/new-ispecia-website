'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaRegComments, FaRegUser } from 'react-icons/fa';

const BlogAreaOne = () => {
  const [latestPost, setLatestPost] = useState(null);

  // Fetch the latest blog post
  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const res = await fetch('https://www.ispecia.com/wp-json/wp/v2/posts?_embed&per_page=1');
        const posts = await res.json();
        if (posts.length > 0) {
          setLatestPost(posts[0]);
        }
      } catch (error) {
        console.error('Error fetching the latest blog post:', error);
      }
    };

    fetchLatestPost();
  }, []);

  if (!latestPost) {
    return <div>Loading...</div>; // Show a loading state while fetching the post
  }

  const { title, date, _embedded, slug } = latestPost;

  return (
    <>
      {/*===================== Blog Area One start =====================*/} 
      <div className="blog-area pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">New Blog</h6>
            <h2 className="title">
              Explore our newest <span>blogs</span>
            </h2>
          </div>
          <div className="row justify-content-center">
            {/* Show the latest blog */}
            <div className="col-lg-6 col-md-8">
              <div className="single-blog-list">
                <div className="thumb">
                  {_embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                    <img src={_embedded['wp:featuredmedia'][0].source_url} alt={title.rendered} />
                  ) : (
                    <img src="assets/img/blog/placeholder.png" alt="No Image Available" />
                  )}
                </div>
                <div className="details">
                  <p className="date mb-3 d-flex align-items-center">
                    <FaCalendarAlt className="me-2" />
                    {new Date(date).toLocaleDateString()}
                  </p>
                  <h5>
                    <Link href={`/blog/${slug}`}>
                      {/* Remove the <a> tag here */}
                      {title.rendered}
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser />
                          {_embedded?.author?.[0]?.name || 'Admin'}
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments />
                          0 Comments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* See More Blogs button */}
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <Link href="/blog" className="btn btn-border-base mt-0">
                See More Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BlogAreaOne End =====================*/}
    </>
  );
};

export default BlogAreaOne;
