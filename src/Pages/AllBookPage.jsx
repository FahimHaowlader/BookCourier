import React from "react";

const AllBookPage = () => {
  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$2.50",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYavYDSjbtgqfiOZqQqikgZn50EXGmwvVFRdZ2QJn8u4e_I3lSvzDvP-WniE2y4PznGHtaWWFNuJ1_01N7spFMGD227forb6BQVevvdFCPOOTVtJ7cowzdub7LI30ya0Em1przWkeJbX7LD0mP_tss9GsVfVDYUz9xWqrm044pTVoZQWXeDEca58YCl1P96cYpmcIiQ2BuGAuL6D5sxyoVnK8nBviEjQ0m3jqEvU-fZnXd65x4vQduGTAA1omFcNRlBURFMNKMpo",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "$3.00",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCuHOsl_zcda6gwRzXTmJttCObYwLdujksC9MxNgo_1vt0SLswjCYmTCeIXEHrjwofqqHD4IrM8SCvSNfLyuPYkAqQwrPodSWXJtGCM_vTIPwZLLlXQuPRA7wJgh8Q53JwB0XlhW7R7_3JotCKGywhtLGfv8CjzVR60eif38rbbTsVPHkF5ExV4L3Mu_Jc8InW-UdqB9VvR2_ZS7qxPw52rB7fTMUVan3FpjhtNnNjv3ioYi4Y0LgjbY2rfZcV9VnGZ12vqjrkNS4",
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      price: "$2.75",
      cover:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFcE2ZWylHAjdi8icXTQ-sGLpsePNAmWnBCW9HaP7mazQhC5ZBuMBDTBR5HJl7_wM4ESW5mObdDVasB3B0jPQukQvh35L-BF0-oXHKMAQOlFk-_w6EJm8qm8URuGyoMIegxafcqkTucmG93odbSov27QXyzJsk_yuOcRG1V_ds1mY3-GzNJdumVAgQgfm3ME3KUtMuj675Z-q9w1JNToLRHAYOK_wIeC7s7ZLtP_5cghtH5bpfj7d-Sl22jU-LKBzH1b1eAlA87y0",
    },
    // Add other books similarly...
  ];

  return (
    <main className="flex-1 bg-slate-100 w-full max-w-8xl  px-4 sm:px-6 md:px-20 lg:px-24 xl:px-36 py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-slate-900">
            All Books
          </h1>
          <p className="text-slate-600 dark:text-slate-600">
            Browse our extensive collection of books available for delivery.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200">
          <div className="w-full flex-1">
            <label className="relative text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">
                sea
              </span>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-900 border border-slate-300 dark:border-slate-300 bg-slate-200 dark:bg-slate-200  h-10 placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 pl-14 text-base"
                placeholder="Search by title, author, or ISBN..."
              />
            </label>
          </div>                  
          <div className="flex justify-end gap-4  min-w-[84px]">
            <div className="relative  min-w-[84px]">
              <select 
                 className="flex h-10 min-w-[84px] cursor-pointer items-center justify-end overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
                {/* <option selected>Sort by: Relevance</option> */}
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                {/* <option>Title: A to Z</option> */}
                {/* <option>Author: A to Z</option> */}
              </select>
              {/* <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 dark:text-slate-400">
                expand_more
              </span> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <a
              key={index}
              className="group block bg-slate-200 dark:bg-slate-200  rounded-xl border border-slate-300 dark:border-slate-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              href="#"
            >
              <div className="flex flex-col">
                <div className="relative overflow-hidden rounded-t-xl">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${book.cover})` }}
                    alt={`Book cover for ${book.title}`}
                  ></div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-semibold text-slate-950 dark:text-slate-950 leading-tight truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-600 mt-1">
                    {book.author}
                  </p>
                  <p className="text-lg font-bold text-primary mt-auto pt-2">
                    {book.price}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllBookPage;
