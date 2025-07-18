import React from 'react';
import BlogCard from './BlogCard';
import blogData from '../data/blogData'; // Correct: No curly braces
import './BlogLayout.css';

const BlogLayout = () => {
  return (
    <section className="Blog-layout">
      <h2 className="section-title">FSSAI Blogs</h2>
      <div className="card-grid">
        {blogData.map((blog) => (
          // Using the unique blog.id for the key is best practice
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogLayout;