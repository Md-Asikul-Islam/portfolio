"use client";

import Link from "next/link";
import { Blog } from "../types/index";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className="bg-amber-400 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* External link */}
      <Link
        href={blog.slug}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Render image only if it exists */}
        {blog.image && (
          <Image
            src={blog.image as string | StaticImageData}
            alt={blog.title}
            className="rounded-md mb-4 w-full h-48 object-cover"
            width={400}
            height={200}
            priority
          />
        )}

        <h3 className="px-2 text-xl font-semibold mb-2 hover:text-primary transition-colors">
          {blog.title}
        </h3>

        <p className="px-2 text-gray-600 dark:text-gray-300 mb-4">
          {blog.excerpt}
        </p>

        <div className="p-2 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <span>{blog.readTime}</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
