'use client';
import React, { useState, useMemo, useCallback } from 'react';
import testimonials from '@/app/testimonial/data.json'; // Import the testimonials data
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import "./testimonialarea.css";

const TestimonialGrid = () => {
  const videosPerPage = 8; // Display 8 videos per page (2 columns, 4 rows)
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize the currentVideos to avoid recalculating unless currentPage changes
  const currentVideos = useMemo(() => {
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    return testimonials.slice(indexOfFirstVideo, indexOfLastVideo);
  }, [currentPage]);

  const totalPages = Math.ceil(testimonials.length / videosPerPage);

  // Memoize the nextPage and prevPage functions with useCallback
  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }, [currentPage]);

  // Memoize the mouse enter/leave handlers using useCallback
  const handleMouseEnter = useCallback((id) => {
    const iframe = document.getElementById(`iframe-${id}`);
    const src = iframe.src;
    iframe.src = `${src}?autoplay=1`;
  }, []);

  const handleMouseLeave = useCallback((id) => {
    const iframe = document.getElementById(`iframe-${id}`);
    const src = iframe.src.split('?')[0]; 
    iframe.src = src;
  }, []);

  return (
    <div className="testimonial-grid">
      <div className="row">
        {currentVideos.map((testimonial) => (
          <div className="col-md-6 mb-4" key={testimonial.id}>
            <div className="video-wrapper">
              <h3>{testimonial.title}</h3>
              <p>{testimonial.description}</p>
              <iframe
                id={`iframe-${testimonial.id}`}
                loading="lazy"
                width="100%"
                height="455"
                src={testimonial.videoUrl}
                title={testimonial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video"
                onMouseEnter={() => handleMouseEnter(testimonial.id)}
                onMouseLeave={() => handleMouseLeave(testimonial.id)}
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} className="prev page-numbers" disabled={currentPage === 1}>
          <FaAngleLeft className="mb-1" />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page-numbers ${currentPage === index + 1 ? 'current' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} className="next page-numbers" disabled={currentPage === totalPages}>
          <FaAngleRight className="mb-1" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialGrid;
