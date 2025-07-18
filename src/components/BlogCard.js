import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="blog-card-link">
      <div className="blog-card">
        <img src={blog.image} alt={blog.title} className="blog-img" />
        <div className="blog-content">
          <p className="blog-date">{blog.date}</p>
          <h3>{blog.title}</h3>
          {blog.description && <p className="blog-description">{blog.description}</p>}
          <div className="blog-footer">
            {blog.author && <span>{blog.author}</span>}
            {blog.comments !== undefined && <span>{blog.comments} Comments</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
