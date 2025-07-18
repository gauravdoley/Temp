import React from 'react';
import BlogCard from './BlogCard';
import BlogData from '../data/blogData';
import './BlogLayout.css';

const BlogLayout = () => {
  return (
    <section className="Blog-layout">
      <h2 className="section-title">FSSAI Blogs</h2>
      <div className="card-grid">
        {BlogData.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogLayout;
