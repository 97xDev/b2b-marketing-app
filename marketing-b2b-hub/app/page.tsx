import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">We do Very Good Marketing</h1>
            <p className="mt-4 text-lg text-gray-300">
              Unlock data-driven strategies that drive revenue, engagement, and
              growth.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/b2b-marketing-home-hero.jpg"
              alt="B2B Marketing"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-200 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Key Benefits</h2>
          <p className="text-gray-600 mt-2">
            Discover the advantages of a strong B2B marketing strategy.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Increased ROI</h3>
              <p className="text-gray-600 mt-2">
                Optimize your marketing efforts for maximum return on
                investment.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Targeted Strategies</h3>
              <p className="text-gray-600 mt-2">
                Leverage data-driven insights to reach the right audience.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Stronger Brand Presence</h3>
              <p className="text-gray-600 mt-2">
                Establish authority in your industry and build lasting
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Latest Insights</h2>
          <p className="text-center text-gray-600 mt-2">
            Stay up to date with the latest trends and strategies in B2B
            marketing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden p-4"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl leading-[1.2] font-semibold mt-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 mb-4">{post.subtitle}</p>
                <Link
                  href={"/blog/" + post.slug}
                  className="w-fit mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">
          Take Your Marketing to the Next Level
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Let&apos;s create a strategy tailored to your business needs.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
