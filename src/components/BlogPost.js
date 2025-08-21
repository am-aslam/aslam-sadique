import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, Tag } from 'lucide-react';
import { blogPosts } from '../mock';
import Header from './Header';
import Footer from './Footer';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post">
        <Header />
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-post">
      <Header />
      
      <article className="blog-post-section">
        <div className="blog-post-container">
          <div className="blog-post-header">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="post-hero">
              <img 
                src={post.image} 
                alt={post.title}
                className="post-hero-image"
              />
            </div>

            <div className="post-header">
              <h1 className="post-title">{post.title}</h1>
              
              <div className="post-meta">
                <span className="post-date">
                  <Calendar size={16} />
                  {formatDate(post.publishDate)}
                </span>
                <span className="post-read-time">
                  <Clock size={16} />
                  {post.readTime}
                </span>
                <span className="post-views">
                  <Eye size={16} />
                  {post.views.toLocaleString()} views
                </span>
              </div>

              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="post-tag">
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="post-content">
            <div className="post-excerpt">
              <p className="excerpt-text">{post.excerpt}</p>
            </div>

            <div className="post-body">
              <p>This is a detailed blog post about {post.title.toLowerCase()}. The full content would be rendered here with proper formatting, code blocks, images, and other rich media elements.</p>
              
              <p>In this comprehensive guide, we'll explore the technical challenges, solutions implemented, and lessons learned throughout the development process. This article provides valuable insights for data scientists and machine learning engineers working on similar projects.</p>
              
              <h2>Key Concepts</h2>
              <p>The implementation involves several advanced techniques and methodologies that are crucial for understanding the underlying principles and achieving optimal results in production environments.</p>
              
              <h2>Technical Implementation</h2>
              <p>Here we would dive deep into the technical aspects, code examples, and architectural decisions that make this solution effective and scalable.</p>
              
              <h2>Results and Impact</h2>
              <p>The project has achieved significant results in terms of performance, efficiency, and real-world impact, demonstrating the practical value of the implemented approaches.</p>
              
              <h2>Conclusion</h2>
              <p>This work contributes to the field by providing practical insights and proven methodologies that can be applied to similar challenges in artificial intelligence and machine learning.</p>
            </div>
          </div>

          <div className="post-footer">
            <div className="post-share">
              <h3>Share this article</h3>
              <div className="share-buttons">
                <button className="share-button">Twitter</button>
                <button className="share-button">LinkedIn</button>
                <button className="share-button">Copy Link</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;