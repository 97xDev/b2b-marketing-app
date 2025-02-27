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
    <div className="max-w-7xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
        Articles Tagged: #{tag}
      </h1>

      <div className="flex flex-row gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="flex flex-col gap-2 mb-8 py-4">
              <Image
                src={post.image}
                alt={post.title}
                width={550}
                height={600}
                className="h-48 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
              <h3 className="text-md leading-[1.2] text-gray-800 mb-2">
                {post.subtitle}
              </h3>
              <Link
                href={`/blog/${post.slug}`}
                className="w-fit mt-auto inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
    </div>
  );
}
