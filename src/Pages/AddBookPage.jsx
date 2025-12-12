import React, { useState } from "react";

export default function AddBookPage() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Published");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { bookName, author, status, price, image };
    console.log("Submitted Book:", bookData);
    alert("Book submitted! Check console for data.");
    // Reset form
    setBookName("");
    setAuthor("");
    setStatus("Published");
    setPrice("");
    setImage(null);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between gap-3 pb-8">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-[#0d141b] dark:text-[#0d141b] text-4xl font-black leading-tight tracking-[-0.033em]">
            Add a New Book
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-base font-normal leading-normal">
            Fill in the details below to add a new book to the system.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white p-6 flex flex-col gap-6">
        {/* Book Image */}
        <div className="flex flex-col">
          <p className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium leading-normal pb-2">
            Book Image
          </p>
          <label className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-300 px-6 py-10 cursor-pointer">
            {image ? (
              <img src={image} alt="Book Preview" className="max-h-48 object-contain" />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <p className="text-[#0d141b] dark:text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">
                  Upload Book Cover
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm text-center">
                  Drag & drop an image here, or click to browse
                </p>
              </div>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        {/* Book Name & Author */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <p className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium leading-normal pb-2">Book Name</p>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              placeholder="Enter the book title"
              className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-[#0d141b] dark:text-[#0d141b] border border-slate-300 dark:border-slate-300 bg-background-light dark:bg-slate-200 h-10 p-[15px] text-base placeholder:text-slate-400 dark:placeholder:text-slate-500"
              required
            />
          </label>

          <label className="flex flex-col">
            <p className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium leading-normal pb-2">Book Author</p>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter the author's full name"
               className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-[#0d141b] dark:text-[#0d141b] border border-slate-300 dark:border-slate-300 bg-background-light dark:bg-slate-200 h-10 p-[15px] text-base placeholder:text-slate-400 dark:placeholder:text-slate-500"
              required
            />
          </label>
        </div>

        {/* Status & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <p className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium leading-normal pb-2">Status</p>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-[#0d141b] dark:text-[#0d141b] border border-slate-300 dark:border-slate-300 bg-background-light dark:bg-slate-200 h-10 p-[15px] text-base placeholder:text-slate-400 dark:placeholder:text-slate-500"
            >
              <option>Published</option>
              <option>Unpublished</option>
            </select>
          </label>

          <label className="flex flex-col">
            <p className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium leading-normal pb-2">Price</p>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-slate-500 dark:text-slate-400">$</span>
              </div>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0"
                step="10"
                className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-[#0d141b] dark:text-[#0d141b]  border border-slate-300 dark:border-slate-300 bg-slate-200 dark:bg-slate-200 h-14 p-[15px] pl-8 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500"
                required
              />
            </div>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-200">
          <button
            type="button"
            onClick={() => {
              setBookName(""); setAuthor(""); setStatus("Published"); setPrice(""); setImage(null);
            }}
                className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
            Cancel
          </button>
          <button
            type="submit"
                 className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
            Submit Book
          </button>
        </div>
      </form>
    </div>
  );
}
