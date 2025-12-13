import { useState } from "react";

const initialWishlist = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhY6ePzAeD1fvcLEkYwgf-2YyQ5nDub5quJ2a4W8t79F9WDCiTZ3Uam7rxke3TYYmS_uaMJRW1hVOSyJsl0KvQFdf1zTALsM3eNgze1pU48gNc3kn6DKrD_l2OwJIFyt4SmzHC6HosnLU3pMema1n7Kyx3n6xN3vXaX364zSnvNbfmYvGBMSANz-2dm5tbO6lYOrUijIB-nl3SBMHzDivN3FYR-jgZT7Y6qKDSp6m9r-TcIczEQo0MR3a7kvWZ4fzNX8C8Zp-J19Q",
  },
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhY6ePzAeD1fvcLEkYwgf-2YyQ5nDub5quJ2a4W8t79F9WDCiTZ3Uam7rxke3TYYmS_uaMJRW1hVOSyJsl0KvQFdf1zTALsM3eNgze1pU48gNc3kn6DKrD_l2OwJIFyt4SmzHC6HosnLU3pMema1n7Kyx3n6xN3vXaX364zSnvNbfmYvGBMSANz-2dm5tbO6lYOrUijIB-nl3SBMHzDivN3FYR-jgZT7Y6qKDSp6m9r-TcIczEQo0MR3a7kvWZ4fzNX8C8Zp-J19Q",
  },
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhY6ePzAeD1fvcLEkYwgf-2YyQ5nDub5quJ2a4W8t79F9WDCiTZ3Uam7rxke3TYYmS_uaMJRW1hVOSyJsl0KvQFdf1zTALsM3eNgze1pU48gNc3kn6DKrD_l2OwJIFyt4SmzHC6HosnLU3pMema1n7Kyx3n6xN3vXaX364zSnvNbfmYvGBMSANz-2dm5tbO6lYOrUijIB-nl3SBMHzDivN3FYR-jgZT7Y6qKDSp6m9r-TcIczEQo0MR3a7kvWZ4fzNX8C8Zp-J19Q",
  },
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhY6ePzAeD1fvcLEkYwgf-2YyQ5nDub5quJ2a4W8t79F9WDCiTZ3Uam7rxke3TYYmS_uaMJRW1hVOSyJsl0KvQFdf1zTALsM3eNgze1pU48gNc3kn6DKrD_l2OwJIFyt4SmzHC6HosnLU3pMema1n7Kyx3n6xN3vXaX364zSnvNbfmYvGBMSANz-2dm5tbO6lYOrUijIB-nl3SBMHzDivN3FYR-jgZT7Y6qKDSp6m9r-TcIczEQo0MR3a7kvWZ4fzNX8C8Zp-J19Q",
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDR-iq71Yvqs8CXxng3_VcxoC363B8Ejkfug_RaXOZUk4XcJfIq6N3PnXMQ1iSKODjYEWAtB2BBR6GBEucZEIVfWJUEeTMzkLmQMy2GJLOfMIoK6mBgsE9ivpvLvhR8j-fdy-_5C-3GLH9LOunJIR-OaM40wJ6mQg4wZW_mY5llDFEFGuBO7E-EbMXtQwVpeVJDMrIkDdad_D8ykzaEr02l44PF3lTfHzdl3glyzCn0IugE0YfYmdq535Wvu2BYeXR1OJVIu0k80jw",
  },
  {
    id: 3,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVS3NrUJ804vfYg5cyxowBCdkYiiJjguq84hovzwRyzFKNZ3dLE11Ik1fPuvaAicCeVLtLXTY0Ln5DUCpO7PyYQcXWEc9YzEjTsMiks483MkTH84jLy6NgRz38hlL-m-iTLFL9Yc9DK-MOb5ahJL11XXTthXPIvyFi2VJtjRk4I8MfX40ri2Fsa0pxLs-un3bDOIVNPTMYYZZV_UHU5SWsBJtYDlnqDnMys4Q7frw92oWMe2-YMp5Wo8oiEaXQ1io5weYNirswdmM",
  },
  {
    id: 4,
    title: "The Four Winds",
    author: "Kristin Hannah",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoJvhCYgWe6wlwqtdNBbBHqP_SRVvfM2p1J1OVbyFC4oC-_TmuLMs9QCrVWMJPB4FLz1pp5tTwiHJHJPojlxK8elhPs3E9BTjjgu6AEbBrmS1lJRp5iSaGH36plJ7bh8NTVeH6otWMtCsdBn1zxq5g-V3Cxv42J0ZGCLH3kxeJhpnUwfz62wrWSRQyJsAlNIrS7elLvq66JsMBYhwvdEwtzSh6zHrAmqnQdFxaMW7W9ZpODzJ_3uPCC9NMDXgHtvFyMnL-X-s-UW8",
  },
  
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setWishlist((prev) => prev.filter((book) => book.id !== id));
  };

  const filteredWishlist = wishlist.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-4xl font-black text-slate-900 dark:text-slate-900">
          My Wishlist
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-500">
          You have {wishlist.length} books on your wishlist
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Find a book in your wishlist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-200 bg-white dark:bg-white text-slate-900 dark:text-slate-900 placeholder:text-slate-500 dark:placeholder:text-slate-400 "
        />
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        {filteredWishlist.map((book) => (
          <div key={book.id} className="flex flex-col gap-4 group">
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg shadow-md"
                style={{ backgroundImage: `url(${book.image})` }}
              ></div>
              <button
                onClick={() => handleDelete(book.id)}
                className="absolute top-2 right-2 bg-white/70 hover:cursor-pointer dark:bg-black/50 backdrop-blur-sm text-red-500 dark:text-red-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-black/90 transition-opacity opacity-0 group-hover:opacity-100"
              >
                <span className="material-symbols-outlined text-base">
                  D
                </span>
              </button>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-slate-900 dark:text-slate-900truncate">
                {book.title}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-700">
                {book.author}
              </p>
              <a
                href="#"
                className="text-sm text-blue-400 font-medium mt-1 hover:underline"
              >
                View Details
              </a>
            </div>
            <button 
           className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
              Order Now
            </button>
          </div>
        ))}

        {filteredWishlist.length === 0 && (
          <p className="col-span-full text-center text-slate-700 dark:text-slate-700 text-2xl">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
}
