// src/app/components/Blogs.tsx
'use client'

import { blogs } from "../contents/blog";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Blogs() {
  return (
    <section id="blog" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Latest  <span className='text-cyan-300'> Blog</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
