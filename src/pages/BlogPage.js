import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';
import './BlogPage.css';

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div className="blog-page-container"><h2>Blog not found!</h2></div>;
  }

  const renderContent = () => {
    if (blog.content && typeof blog.content === 'string') {
      return blog.content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    }
    return <p>{blog.description}</p>;
  };

  return (
    <div className="blog-page-container">
      <div className="blog-page-content">
        
        <main className="blog-main-content">
          <header className="blog-header">
            <h1>{blog.title}</h1>
            <p className="blog-meta">
              Published on {blog.date}
            </p>
          </header>
          <img src={blog.image} alt={blog.title} className="blog-main-image" />
          <article className="blog-article-text">
            {renderContent()}
          </article>
        </main>

        <aside className="blog-sidebar">
          <div className="author-card">
            <img 
              src={blog.authorImage || 'https://placehold.co/80x80/EFEFEF/333?text=Author'} 
              alt={blog.authorName || 'Author'} 
              className="author-image" 
            />
            <h3>{blog.authorName || 'Author Name'}</h3>
            <p className="author-title">{blog.authorTitle || 'Author Title'}</p>
            
            {/* NEW: Added the author bio section */}
            {blog.authorBio && (
              <p className="author-bio">{blog.authorBio}</p>
            )}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogPage;
