import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { addInternalLinks } from "@/lib/internalLinker";
import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug.toString() === resolvedParams.slug);

  if (!post) return notFound();

  const linkedContent = addInternalLinks(post.content);

  const relatedArticles = posts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((tag: string) => post.tags.includes(tag))
    )
    .slice(0, 4); // Limit to 4 articles

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-0">{post.title}</h1>
      <h2 className="text-xl text-gray-800 mt-2 mb-2">{post.subtitle}</h2>
      <span className="text-gray-800 text-sm mb-6">{post.date}</span>
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={800}
        className="w-full rounded-lg h-80 object-cover mt-6"
      />
      <div className="flex flex-wrap gap-2 font-semibold mt-2">
        {post.tags &&
          post.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-blue-700 px-2 py-1 rounded text-sm hover:underline transition"
            >
              #{tag}
            </Link>
          ))}
      </div>

      <div className="grid grid-cols-4 gap-8 mt-4">
        <div className="prose prose-invert max-w-3xl col-span-3">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: (props) => (
                <h1 className="text-4xl font-bold mt-6" {...props} />
              ),
              h2: (props) => (
                <h2
                  className="text-3xl font-semibold mt-6 text-gray-800"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-2xl font-semibold mt-4 text-gray-800"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="text-gray-800 mt-2 leading-relaxed max-w-2xl"
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  className="list-disc list-inside mt-2 space-y-1 text-gray-800"
                  {...props}
                />
              ),
              li: (props) => <li className="ml-4 text-gray-800" {...props} />,
              a: (props) => (
                <a className="text-blue-600 hover:underline" {...props} />
              ),
            }}
          >
            {linkedContent}
          </ReactMarkdown>
        </div>

        {relatedArticles.length > 0 && (
          <aside className="">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Related Articles
            </h3>
            <div className="flex flex-col gap-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="flex items-center py-2 rounded-lg  transition"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover mr-4"
                  />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-md leading-[1.2] font-semibold">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
