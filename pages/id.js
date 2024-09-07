import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function ViewPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4">{post.content}</p>
      </div>
    </div>
  );
}
