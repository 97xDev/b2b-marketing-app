import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Blog() {
  const featuredPost = posts[0];
  const newPosts = posts.slice(1, 5);

  return (
    <div className="container mx-auto max-w-7xl mt-10 p-6">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={700}
            height={300}
            className=" h-80 object-cover rounded-lg"
          />
          <h1 className="my-2 text-4xl font-bold mt-4">{featuredPost.title}</h1>
          <p className="text-gray-600 mt-2">{featuredPost.subtitle}</p>
          <Link
            href={"/blog/" + featuredPost.slug}
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Read More
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">New Articles</h2>
          <ul className="mt-4 space-y-2">
            {newPosts.map((post) => (
              <li key={post.id}>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <Link
                  href={"/blog/" + post.slug}
                  className="block text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 h-[2px] bg-blue-600" />
      {/* All Articles Section */}
      <h2 className="text-3xl font-bold mt-10">All Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 auto-rows-fr">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col p-4 rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="leading-none text-xl font-bold mt-4">
              {post.title}
            </h2>
            <p className="text-gray-600 my-4">{post.subtitle}</p>
            <Link
              href={"/blog/" + post.slug}
              className="w-fit center mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
