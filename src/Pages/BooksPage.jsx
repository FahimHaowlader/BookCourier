import { useState } from "react";


const initialBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    isbn: "978-0-7352-1129-2",
    genre: "Fantasy",
    dateAdded: "24/05/2024",
    published: true,
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    isbn: "978-0-593-13520-4",
    genre: "Sci-Fi",
    dateAdded: "23/05/2024",
    published: false,
  },
  {
    id: 3,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    isbn: "978-0-593-31817-1",
    genre: "Dystopian",
    dateAdded: "22/05/2024",
    published: true,
  },
];

export default function BooksPage() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.isbn}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const paginatedBooks = filteredBooks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const handleDelete = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-900">
        Manage Books
      </h1>

      {/* Search */}
      <div className="flex items-center gap-4">
        <input
          className="w-full max-w-sm bg-white border border-slate-200 px-4 py-2.5 text-black rounded-lg text-sm"
          placeholder="Search by title, author, or ISBN..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-200 bg-white dark:bg-slate-900 text-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-900 dark:bg-slate-900 font-bold">
              <tr>
                <th className="px-4 py-3 text-xs  uppercase  ">
                  Book Title & Author
                </th>
                <th className="px-4 py-3 text-xs uppercase ">
                  ISBN
                </th>
                <th className="px-4 py-3 text-xs uppercase ">
                  Genre
                </th>
                <th className="px-4 py-3 text-xs uppercase ">
                  Date Added
                </th>
                <th className="px-4 py-3 text-xs uppercase text-center ">
                  Status
                </th>
                <th className="px-4 py-3 text-xs uppercase text-center ">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 hover:cursor-pointer  dark:divide-slate-200 bg-white dark:bg-white">
              {paginatedBooks.map((book) => (
                <tr
                  key={book.id}
                  className=" hover:bg-slate-200 dark:hover:bg-slate-200"
                >
                  <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-900">
                    "{book.title}" by {book.author}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-500">
                    {book.isbn}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-600">
                    {book.genre}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-500">
                    {book.dateAdded}
                  </td>
                  <td className="text-center px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        book.published
                          ? "bg-green-100 text-green-800 dark:bg-green-100 dark:text-green-800"
                          : "bg-red-100 text-red-800 dark:bg-red-100 dark:text-red-800"
                      }`}
                    >
                      {book.published ? "Published" : "Unpublished"}
                    </span>
                  </td>
                  <td className="flex items-center justify-center text-center px-4 py-3">
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="flex items-center gap-1 text-red-400 hover:text-red-600 hover:cursor-pointer dark:text-red-400"
                    >
                      {/* <span className="material-symbols-outlined text-base">
                        delete
                      </span> */}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {paginatedBooks.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400"
                  >
                    No books found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 text-sm rounded-lg border disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {page} of {totalPages || 1}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 text-sm rounded-lg border disabled:opacity-50"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}
