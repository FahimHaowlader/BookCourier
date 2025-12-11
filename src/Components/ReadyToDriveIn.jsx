import React from "react";

const ReadyToDiveIn = () => {
  return (
    <section className="py-16 bg-slate-900 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="bg-slate-800 text-white rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Ready to Dive In?
          </h2>
          <p className="mt-2 text-white/80 max-w-2xl">
            Join thousands of readers and get your next favorite book delivered to your door. 
            Sign up today and transform your reading experience.
          </p>
        </div>
        <a
          className="flex-shrink-0 inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-700 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-600 transition-colors shadow-lg"
          href="#"
        >
          <span className="truncate">Start Reading Now</span>
        </a>
      </div>
    </section>
  );
};

export default ReadyToDiveIn;
