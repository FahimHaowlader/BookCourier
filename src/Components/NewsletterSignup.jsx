import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-900 dark:bg-slate-900 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] dark:text-slate-50 mb-4">
        Stay Updated
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
        Subscribe to our newsletter to get the latest books, library updates, and exclusive offers delivered straight to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-primary text-white border border-slate-300 dark:border-slate-700 bg-slate-800 hover:cursor-pointer font-bold text-base hover:bg-slate-600 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
