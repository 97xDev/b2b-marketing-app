import { notFound } from 'next/navigation';
import posts from '@/lib/blogData.json';
interface BlogPostProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.id.toString() === resolvedParams.id);

  if (!post) return notFound();

  return (
    <div className='max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg'>
      <img src={post.image} alt={post.title} className='w-full h-64 object-cover rounded-lg' />
      <h1 className='text-4xl font-bold mt-6'>{post.title}</h1>
      <h2 className='text-xl text-gray-400 mt-2'>{post.subtitle}</h2>
      <div className='text-gray-300 mt-4 whitespace-pre-line'>{post.content}</div>
    </div>
  );
}