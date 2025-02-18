import Link from "next/link";
import posts from "@/lib/blogData.json";

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-blue-400">
        A B2B Marketing Blog
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col justify-stretch bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.subtitle}</p>
            <Link
              href={"/blog/" + post.id}
              className="w-[115px] text-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
