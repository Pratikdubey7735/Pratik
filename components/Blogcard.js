import Link from 'next/link';
import Button from './Button';

export default function Blogcard({ post }) {
  const handleDelete = async () => {
    await fetch(`/api/posts/${post.id}`, { method: 'DELETE' });
    // Refresh or update state after deletion
  };

  return (
    <div className="shadow p-4 mb-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <div className="mt-4">
        <Link href={`/posts/${post.id}`} passHref>
          <Button>View</Button>
        </Link>
        <Button onClick={handleDelete} className="ml-2">Delete</Button>
      </div>
    </div>
  );
}
