import React, { useMemo, useState,useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router";

const AllBookPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [allBooks,setAllBooks] = useState([]); // Placeholder for future use

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        setAllBooks(data);
        console.log("All books data:", data);
      } catch (error) {
        console.error("Error fetching all books:", error);
      }
    };
    fetchAllBooks();
  }, []);

  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "$3.00",
      cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCuHOsl_zcda6gwRzXTmJttCObYwLdujksC9MxNgo_1vt0SLswjCYmTCeIXEHrjwofqqHD4IrM8SCvSNfLyuPYkAqQwrPodSWXJtGCM_vTIPwZLLlXQuPRA7wJgh8Q53JwB0XlhW7R7_3JotCKGywhtLGfv8CjzVR60eif38rbbTsVPHkF5ExV4L3Mu_Jc8InW-UdqB9VvR2_ZS7qxPw52rB7fTMUVan3FpjhtNnNjv3ioYi4Y0LgjbY2rfZcV9VnGZ12vqjrkNS4",
    },
  ];

  // 🔍 SEARCH + 🔃 SORT LOGIC
  const filteredAndSortedBooks = useMemo(() => {
    let filtered = allBooks.filter((book) =>
      `${book.title} ${book.author}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    if (sortOption === "low-high") {
      filtered.sort(
        (a, b) =>
          parseFloat(a.price) -
          parseFloat(b.price)
      );
    }

    if (sortOption === "high-low") {
      filtered.sort(
        (a, b) =>
          parseFloat(b.price) -
          parseFloat(a.price)
      );
    }

    return filtered;
  }, [allBooks, searchTerm, sortOption]);

  return (
    <main className="flex-1 bg-slate-100 px-4 md:px-12 lg:px-20 xl:px-40 py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">All Books</h1>
          <p className="text-slate-600">
            Browse our extensive collection of books available for delivery.
          </p>
        </div>

        {/* SEARCH & SORT */}
        <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-white rounded-xl border border-slate-200">
          {/* SEARCH */}
          <div className="w-full flex-1 relative">
            <BiSearchAlt
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-200 "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* SORT */}
          <select
            className="h-10 rounded-lg bg-slate-900 text-white px-4 text-sm font-semibold"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* BOOK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredAndSortedBooks.map((book, index) => (
            <Link to={`/book/${book._id}`}              key={index}
              className="bg-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition hover:cursor-pointer"
            >
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url(${book.cover})` }}
              />
              <div className="p-4">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-slate-600">{book.author}</p>
                <p className="text-lg font-bold mt-2"> $ {book.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllBookPage;
