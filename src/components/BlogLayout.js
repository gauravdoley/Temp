import React, { useState, useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
import blogData from '../data/blogData';
import './BlogLayout.css';

const BlogLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the first real item at index 1
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  // Create a new array for seamless looping: [last, ...all_items, first]
  const loopedBlogs = [blogData[blogData.length - 1], ...blogData, blogData[0]];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // This effect handles the "infinite" loop illusion
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        // Jumped from the first item to the last clone
        trackRef.current.style.transition = 'none'; // Disable transition for the jump
        setCurrentIndex(loopedBlogs.length - 2);
        // Force a reflow to apply the style change immediately
        void trackRef.current.offsetHeight; // FIX: Changed to void to satisfy eslint
        trackRef.current.style.transition = ''; // Re-enable transition
      }

      if (currentIndex === loopedBlogs.length - 1) {
        // Jumped from the last item to the first clone
        trackRef.current.style.transition = 'none';
        setCurrentIndex(1);
        // Force a reflow to apply the style change immediately
        void trackRef.current.offsetHeight; // FIX: Changed to void to satisfy eslint
        trackRef.current.style.transition = '';
      }
      setIsTransitioning(false);
    };

    const track = trackRef.current;
    track.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, isTransitioning, loopedBlogs.length]);
  
  // Calculate the required transform to center the current card
  const cardWidthPercent = 100 / 3;
  const transformValue = -currentIndex * cardWidthPercent + cardWidthPercent;

  return (
    <section className="blog-layout">
      <h2 className="section-title">FSSAI Blogs</h2>
      <div className="carousel-container">
        <button className="nav-btn left-btn" onClick={handlePrev} disabled={isTransitioning}>
          &#8249;
        </button>
        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(${transformValue}%)` }}
          >
            {loopedBlogs.map((blog, index) => {
              const isCenter = index === currentIndex;
              return (
                <div key={index} className={`carousel-card ${isCenter ? 'center-card' : 'side-card'}`}>
                  <BlogCard blog={blog} />
                </div>
              );
            })}
          </div>
        </div>
        <button className="nav-btn right-btn" onClick={handleNext} disabled={isTransitioning}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default BlogLayout;
