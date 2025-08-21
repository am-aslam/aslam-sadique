import React from 'react';
import { Calendar, Clock, Eye, ArrowRight, TrendingUp } from 'lucide-react';
import { blogPosts } from '../mock';

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="section-header">
          <div className="section-label">INSIGHTS</div>
          <h2 className="section-title">Latest Articles & Thoughts</h2>
          <p className="section-description">
            Sharing knowledge and insights about AI, machine learning, and data science
          </p>
        </div>

        <div className="blog-content">
          <div className="featured-posts">
            <h3 className="subsection-title">
              <TrendingUp size={20} />
              Featured Articles
            </h3>
            
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <article key={post.id} className="featured-post-card">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="post-overlay">
                      <div className="post-stats">
                        <span className="stat-item">
                          <Eye size={14} />
                          {post.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-date">
                        <Calendar size={14} />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="post-read-time">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="tag-more">+{post.tags.length - 3}</span>
                      )}
                    </div>
                    
                    <button className="read-more-btn">
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="all-posts">
            <h3 className="subsection-title">All Articles</h3>
            
            <div className="posts-list">
              {blogPosts.map((post) => (
                <article key={post.id} className="post-item">
                  <div className="post-thumbnail">
                    <img src={post.image} alt={post.title} />
                  </div>
                  
                  <div className="post-details">
                    <div className="post-meta">
                      <span className="post-date">
                        <Calendar size={14} />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="post-read-time">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <span className="post-views">
                        <Eye size={14} />
                        {post.views.toLocaleString()}
                      </span>
                    </div>
                    
                    <h4 className="post-title">{post.title}</h4>
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="post-tags">
                      {post.tags.slice(0, 4).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="post-actions">
                    <button className="read-btn">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="blog-cta">
            <div className="cta-content">
              <h3>Want to stay updated?</h3>
              <p>Subscribe to get notified about new articles and insights</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="email-input"
                />
                <button className="subscribe-btn">
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;