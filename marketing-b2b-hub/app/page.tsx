import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl mt-10 p-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800">
            VeryGood Marketing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Helping businesses grow through cutting-edge B2B marketing
            strategies.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
        <Image
          src="/b2b-marketing-strategy.jpg"
          alt="Marketing"
          width={500}
          height={300}
          className="md:w-1/2 rounded-lg"
        />
      </div>

      {/* Key Services Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Account-Based Marketing
            </h3>
            <p className="text-gray-600 mt-2">
              Target high-value clients with personalized marketing strategies.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Lead Generation
            </h3>
            <p className="text-gray-600 mt-2">
              Generate quality leads to grow your business efficiently.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              SEO & Content Strategy
            </h3>
            <p className="text-gray-600 mt-2">
              Improve your online presence and attract the right audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
