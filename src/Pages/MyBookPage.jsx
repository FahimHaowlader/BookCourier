import React, { useState,useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router";

const initialBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaEpOl6BoexQcFPvzkl_ijN0pHZtJHKgGYiWnOP3Yx7c-G444n70PGtEkthwwVl2qBAidjf8Gl0Mfp7CDZUNd7pY_pFG-SQNWawyE3Rb_EQEzFeb4oxA_iHOMaEatnBtIP5HOrLKD-mRsJwAK3wYK3C0CaWL7nICGWroHmDuDRAlpMRvomKuoVwddP4S2O71nbFMVGSIIa0zi4VWMEcuz1oW80LWgLS9EDmdpORiua2R3IIk4kgOacwxixmRnUB-1ZuDnuiSBTC9E",
    status: "Published",
  },
  {
    id: 2,
    title: "The Invisible Life of Addie LaRue",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvp3TqHNiUTnBPB3pPvL0uCHsUQ_KNBWtlqQfiLX-Vd0Vd_afuyio0HG5FhJy1MIy_8V878DC19ZyWY0UhkzZPkHZELmHf83ps1NAn4d0sSCvZ3NM8-oyB8Tezs-J5mnFpvfo0-hMsUUGXJ1yyHxF3pIKRb7sSZMlX4ZmCV7j4rgMgN3OIDWHvKj2m7rVtTaust073L8gHNCS97O_UTqarOJCd2hImHCK2W7omk9CtqCA85GbJ6dJoChkBrfesfuCWrW0kN7Z1yas",
    status: "Published",
  },
  {
    id: 3,
    title: "Circe",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAelkzAEmpDQcb5_OQpyJRY_ReNHyMDpJ3bx6saiXd0uTyzndZ6ms5BaLvz2s-xoHzg7ml428S912Y_JqVSDRAfsoGE6j5fbNQmvRlQDV8KqOCG4Yvd7PCz_TsXGTA0x6LuuDlVbEzGqYnByk02ogq6PT_FJYx6T-Jw4s0RyhmkwqVLujQFznm6EBuTc-yA0nCB_BHtpZ7ajBorimtHXYvDMzieCU0Rs3i5nyiWVvH1dJKX7zSn8q0GXkyeZJesb5LuNXHsb0G7wKA",
    status: "Unpublished",
  },
  {
    id: 4,
    title: "Project Hail Mary",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1MFUHu73UqOXzPjmSfcKondQ6Yx8uzgLzLd399Lvk6qzCLio3lTaDjr70H_g_IrZIMHk2rJ-uAsOQKsWJOwTO_m4GMF9cShx__nLWAa5f24sYjL87x4bqBiU9FrbnSAghnN0_DY48cBlbIfnfsz7iPs44WDRm1AnY7ea729G5jWICGNwyvAKv_TvojkjFh0erjN3q80Nk7MTEJ0bQqyzcmwJO9aU4-sTyvze3N9VSTBWrR6mmOe2ZP0ttkMgREs2_mP1I2BLjlmo",
    status: "Published",
  },
];

export default function MyBooksPage() {
  const { user } = useAuth();
  const [books, setBooks] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
      const fetchBooks = async () => {
        try {
          if (user?.email) {
          const response = await axios.get('https://book-courier-backend-six.vercel.app/my-books/' + user.email );
          console.log("Fetched books:", response.data);
          setBooks(response.data);
          }
        } catch (error) {
          console.error("Error fetching books:", error);
        }
        
      };
      fetchBooks();
    // Fetch books from API if needed
  }, [user?.email]);
  // const totalPages = Math.ceil((books?.length || 0) / booksPerPage);
  // const displayedBooks = books?.slice(
  //   (currentPage - 1) * booksPerPage,
  //   currentPage * booksPerPage
  // );

  // const handleEdit = (bookId) => {
  //   const book = books.find((b) => b.id === bookId);
  //   alert(`Edit book: ${book.title}`);
  // };

  // const handlePageChange = (page) => {
  //   if (page < 1 || page > totalPages) return;
  //   setCurrentPage(page);
  // };

  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg md:text-4xl font-bold  text-black dark:text-black ">
          My Books
        </h1>
        <Link to="/add-book" 
         className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
          <span className="material-symbols-outlined"><MdAdd size={18}/></span>
          Add New Book
        </Link>
      </div>

      {/* Table */}
      {
        books && (
      <div className="overflow-x-auto  rounded-xl border border-slate-200 dark:border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-900 dark:bg-slate-900 dark:border-slate-200 text-white font-semibold">
              <th className="px-6 py-4 text-left text-xs uppercase ">
                Book
              </th>
              <th className="text-center px-6 py-4  text-xs uppercase ">
                Status
              </th>
              <th className="text-center px-6 py-4 text-xs uppercase ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            { books.map((book) => (
              <tr
                key={book._id}
                className="border-b bg-white border-slate-200 hover:cursor-pointer dark:border-slate-200 hover:bg-slate-100 dark:hover:bg-slate-100"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={book.pic}
                      alt={book.bookName}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-800">
                      {book.bookName}
                    </span>
                  </div>
                </td>
                <td className="text-center px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full ${
                      book.status === "published"
                        ? "bg-green-200 dark:bg-green-200 text-green-700 dark:text-green-700"
                        : "bg-gray-200 dark:bg-gray-200 text-gray-800 dark:text-gray-800"
                    }`}
                  >
                    {book.status === "published" ? "Published" : "Unpublished"}
                  </span>
                </td>
                <td className="text-center px-6 py-4 text-sm font-semibold text-blue-500 hover:cursor-pointer hover:underline">
                  {/* <button
                    onClick={() => handleEdit(book.id)}
                    // className="flex items-center justify-center gap-2 text-sm font-bold text-primary hover:underline"
                  > */}
                    {/* <span className="material-symbols-outlined text-base">
                      edit
                    </span> */}
                    Edit
                  {/* </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {/* <div className="flex justify-center p-4 border-t border-border-light dark:border-border-dark">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-text-light-secondary dark:text-text-dark-secondary hover:bg-interactive-light dark:hover:bg-interactive-dark"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`flex items-center justify-center w-9 h-9 mx-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-primary text-white font-bold"
                  : "text-text-light-primary dark:text-text-dark-primary hover:bg-interactive-light dark:hover:bg-interactive-dark"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-text-light-secondary dark:text-text-dark-secondary hover:bg-interactive-light dark:hover:bg-interactive-dark"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div> */}
      </div>
        )
      }

      {(!books || books.length === 0) && (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-10">
          You have not added any books yet.
        </p>
      )}
    </div>
  );
}
