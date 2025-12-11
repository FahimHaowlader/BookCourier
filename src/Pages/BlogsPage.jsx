import React, { useState } from "react";
import pic from "../assets/Register.png";
const allPosts = [
  {
    title: "5 Tips to Discover Hidden Library Gems",
    category: "Reading Tips",
    date: "Dec 5, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Library News: New Arrivals This Month",
    category: "Library News",
    date: "Dec 1, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Interview with Author Jane Doe",
    category: "Featured Authors",
    date: "Nov 28, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Top 10 Sci-Fi Reads This Year",
    category: "Reading Tips",
    date: "Nov 20, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Behind the Scenes of City Libraries",
    category: "Library News",
    date: "Nov 15, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  {
    title: "Meet the Author: John Smith",
    category: "Featured Authors",
    date: "Nov 10, 2024",
    img: pic,
    link: "#",
  },
  // Add more posts as needed
];

const BlogsPage = () => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const currentPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 md:py-20 bg-slate-900 dark:bg-slate-900">
      {/* Header / Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d141b] dark:text-slate-50">
          Our Blog
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 mx-auto max-w-2xl">
          Stay up to date with reading tips, library news, and featured authors.
        </p>
      </div>

      {/* Optional: Search / Filter */}
<div className="flex justify-center mb-12 ">
  <div className="flex w-full md:w-1/2 gap-5 flex-wrap">
    <input
      type="text"
      placeholder="Search articles..."
      className="flex-grow px-4 py-2 rounded-lg border border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <button className="px-4 py-2 bg-slate-800 hover:cursor-pointer text-white rounded-lg font-bold hover:bg-slate-600 transition-colors">
      Search
    </button>
  </div>
</div>


      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <span className="inline-block py-1 mb-2 text-sm font-bold text-white bg-primary/20 rounded-full">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-slate-50 mb-2 flex-grow">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{post.date}</p>
              <a
                href={post.link}
                className="mt-auto inline-flex items-center gap-1 text-white font-bold hover:underline"
              >
                Read More
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="px-4 py-2 rounded-lg bg-slate-800 dark:bg-slate-800 text-[#0d141b] dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:cursor-pointer hover:bg-slate-600 font-bold hover:bg-primary hover:text-white transition-colors"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 rounded-lg border font-bold ${
              currentPage === i + 1
                ? "bg-primary text-white border-primary"
                : "bg-white dark:bg-slate-800/50 text-[#0d141b] dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-primary hover:text-white transition-colors"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          className="px-4 py-2 rounded-lg bg-slate-800 dark:bg-slate-800 text-[#0d141b] dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:cursor-pointer hover:bg-slate-600 font-bold hover:bg-primary hover:text-white transition-colors"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogsPage;
