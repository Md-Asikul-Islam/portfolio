"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";  // ✅ FIXED: Added Variants import
import { Blog } from "../types";

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.17, 0.55, 0.55, 1], // Valid easing array (easeOut)
    },
  },
};

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const formattedDate = (() => {
    const d = new Date(blog.date);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
    return "Unknown date";
  })();

  return (
    <motion.article
      variants={cardVariants}  // ✅ FIXED: Correct prop name
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.015 }}
      className="bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
      <Link
        href={blog.slug}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {blog.image && (
          <Image
            src={blog.image as string | StaticImageData}
            alt={blog.title}
            width={500}
            height={300}
            className="w-full h-52 object-cover rounded-b-none"
            priority
          />
        )}

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white hover:text-primary transition-colors">
            {blog.title}
          </h3>

          <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 gap-4">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
