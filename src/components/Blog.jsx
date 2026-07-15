import React, { useState, useEffect } from 'react';
import './Blog.css';

// 👇 INLINE SVG FALLBACK - No external file needed!
const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='45%25' font-size='60' font-family='Arial' fill='%23e60b0b' text-anchor='middle' dy='.3em'%3E✍️%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='18' font-family='Arial' fill='%23999' text-anchor='middle'%3EBlog Post%3C/text%3E%3C/svg%3E";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 👇 YOUR MEDIUM USERNAME
  const MEDIUM_USERNAME = 'kanzafatima9211';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
        );
        
        console.log('📡 Fetching: https://medium.com/feed/@' + MEDIUM_USERNAME);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📝 API Response:', data);

        if (data.status === 'ok') {
          setPosts(data.items);
        } else {
          setError('Failed to load blog posts. The Medium feed may be unavailable.');
        }
      } catch (err) {
        console.error('❌ Error fetching blogs:', err);
        setError('Failed to load blog posts. Please check your Medium username.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const extractImage = (content) => {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  const stripHtml = (html) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  return (
    <section id="blog" className="blog-section">
      <h2>My Blogs</h2>
      
      {loading && (
        <div className="blog-loading">
          <div className="loader"></div>
          <p>Loading articles...</p>
        </div>
      )}

      {error && (
        <div className="blog-error">
          <p>{error}</p>
          <div className="blog-error-actions">
            <a 
              href={`https://medium.com/@${MEDIUM_USERNAME}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="blog-error-link"
            >
              📖 Visit my Medium Profile →
            </a>
          </div>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="blog-empty">
          <p>No blog posts found yet. Write your first article! 🚀</p>
          <a 
            href={`https://medium.com/@${MEDIUM_USERNAME}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="blog-empty-link"
          >
            Start writing on Medium →
          </a>
        </div>
      )}

      <div className="blog-grid">
        {posts.map((post) => {
          const image = extractImage(post.content);
          const description = stripHtml(post.content).substring(0, 150) + '...';
          
          return (
            <a
              key={post.guid}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div className="blog-image-wrapper">
                <img 
                  src={image || defaultImage}
                  alt={post.title}
                  className="blog-image"
                  loading="lazy"
                  onError={(e) => {
                    // 👇 If image fails to load, use default
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              
              <div className="blog-content">
                <h3>{post.title}</h3>
                <div className="blog-meta">
                  <span className="blog-date">{formatDate(post.pubDate)}</span>
                  {post.categories && post.categories.length > 0 && (
                    <span className="blog-tags">
                      {post.categories.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="blog-tag">#{tag}</span>
                      ))}
                    </span>
                  )}
                </div>
                <p>{description}</p>
                <span className="blog-read-more">Read on Medium →</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;