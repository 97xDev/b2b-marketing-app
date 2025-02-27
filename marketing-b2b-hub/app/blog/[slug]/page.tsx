import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { addInternalLinks } from "@/lib/internalLinker";
import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

// Function to extract H2 headings and generate an array of ToC items
const extractHeadings = (content: string) => {
  const headingRegex = /^##\s(.+)/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const id = match[1].toLowerCase().replace(/\s+/g, "-"); // Convert heading to an ID
    headings.push({ text: match[1], id });
  }

  return headings;
};

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  const linkedContent = addInternalLinks(post.content);
  const tocHeadings = extractHeadings(post.content);

  // Find Related Articles (Max 4)
  const relatedArticles = posts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((tag: string) => post.tags.includes(tag))
    )
    .slice(0, 4); // Limit to 4 articles

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="relative w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </section>

      {/* Main Content Section (Two-Column Layout) */}
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        {/* Left Column - Blog Content */}
        <article className="md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="bg-gray-800 text-white py-4">
            <h1 className="md:text-5xl sm:text-3xl text-white-400 font-bold my-4">
              {post.title}
            </h1>
            <h2 className="text-xl text-gray-300 mt-2">{post.subtitle}</h2>
          </div>
          <Markdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (props) => {
                const id = props.children
                  ?.toString()
                  .toLowerCase()
                  .replace(/\s+/g, "-");
                return (
                  <h2
                    id={id}
                    className="text-2xl font-bold mt-6 text-gray-400"
                    {...props}
                  />
                );
              },
              h3: (props) => (
                <h3
                  className="text-xl font-semibold mt-4 text-gray-300"
                  {...props}
                />
              ),
              p: (props) => (
                <p className="text-gray-300 mt-2 leading-relaxed" {...props} />
              ),
              ul: (props) => (
                <ul className="list-disc list-inside mt-2" {...props} />
              ),
              li: (props) => <li className="ml-4 text-gray-300" {...props} />,
              a: (props) => (
                <a className="text-blue-400 hover:underline" {...props} />
              ),
            }}
          >
            {linkedContent}
          </Markdown>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags &&
              post.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-blue-600 transition"
                >
                  #{tag}
                </Link>
              ))}
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                <hr className="pb-4" /> Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="flex items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover mr-4"
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg leading-[1.2] font-semibold">
                        {article.title}
                      </h4>
                      <p className="text-sm leading-[1.2] text-gray-300">
                        {article.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Right Column - Table of Contents (Hidden on Mobile, Sticky on Desktop) */}
        <aside className="hidden md:block md:w-1/4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg sticky top-24">
            <h3 className="text-lg font-bold mb-2 text-blue-400">
              Table of Contents <hr className="pb-2" />
            </h3>
            <ul className="text-gray-300 space-y-2">
              {tocHeadings.map((heading, index) => (
                <li key={heading.id} className="flex items-start">
                  <span className="mr-2 text-gray-400 font-bold">
                    {index + 1}.
                  </span>
                  <a
                    href={`#${heading.id}`}
                    className="hover:text-blue-400 transition"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
