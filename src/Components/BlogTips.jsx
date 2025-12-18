import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

import pic from "../assets/pic6.avif";
import pic1 from "../assets/pic8.avif";
import pic2 from "../assets/pic7.avif";

const BlogTips = () => {
  const posts = [
    {
      title: "5 Ways to Make the Most of Your Library",
      date: "Dec 1, 2024",
      excerpt:
        "Discover tips to efficiently browse, borrow, and enjoy your library experience like never before.",
      img: pic1,
      link: "#",
    },
    {
      title: "Top 10 Sci-Fi Books You Must Read",
      date: "Nov 20, 2024",
      excerpt:
        "Explore the best science fiction books that take you on adventures across galaxies and time.",
      img: pic2,
      link: "#",
    },
    {
      title: "How to Build a Reading Routine",
      date: "Nov 10, 2024",
      excerpt:
        "Learn simple ways to make reading a daily habit and enjoy your favorite books more consistently.",
      img: pic,
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-900 dark:bg-slate-900 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] dark:text-slate-50">
          Library Tips & Blog
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Stay informed and inspired with our latest articles, tips, and reading suggestions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                {post.date}
              </p>
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-slate-50 mb-2">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 flex-1">{post.excerpt}</p>
              <a
                href={post.link}
                className="mt-4 inline-flex items-center text-primary font-bold hover:underline"
              >
                Read More
                <span className="material-symbols-outlined ml-4 text-xl"><IoIosArrowDropdown/></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogTips;
