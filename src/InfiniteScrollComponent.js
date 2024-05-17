import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(false);
      try {
        // Adjust the URL based on your API requirements
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        setPosts(prevPosts => [...prevPosts, ...response.data]);
        setHasMore(response.data.length > 0);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    loadPosts();
  }, [page]);

  // Listener for scroll events to trigger loading more items
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
        return;
      }
      setPage(prevPage => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
