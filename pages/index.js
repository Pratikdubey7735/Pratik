"use client"
import { useEffect, useState } from 'react';
import BlogCard from '../components/Blogcard';
import Header from '../components/Header';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
        <div>
      <Header />
      <div className="container mx-auto p-4">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
