import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;
  const tag = decodeURIComponent(resolvedParams.tag);
  const filteredPosts = posts.filter((post) => post.tags?.includes(tag));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-400 mb-4 text-center">
        Posts Tagged: #{tag}
      </h1>
      <div className="border-b border-gray-600 mb-6"></div>

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div
            key={post.id}
            className="mb-8 p-4 bg-gray-700 rounded-lg shadow-md"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={600}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
            <h3 className="text-lg text-gray-400 mt-2">{post.subtitle}</h3>
            <p className="text-gray-300 mt-4">
              {post.content.substring(0, 150)}...
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center">
          No posts found for this tag.
        </p>
      )}
    </div>
  );
}
