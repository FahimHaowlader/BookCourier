import React from 'react'
import pic1 from '../assets/Register.png';
import pic2 from '../assets/pic4.avif';
import pic3 from '../assets/pic2.avif';

const Steps = () => {
  return (
    <section className="p-4 sm:p-8 md:p-16 lg:pb-6 lg:px-24 xl:px-40 bg-white dark:bg-slate-900">
      <h2 className="text-4xl font-extrabold text-center mb-12 xl:mb-16 text-[#0d141b] dark:text-slate-50">
        How It Works
      </h2>

      <div className="space-y-24">
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#0d141b] dark:text-slate-50">
              Step 1: Browse & Pick a Book
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Explore thousands of books across every genre.
            </p>
          </div>
          <img
            src={pic1}
            alt="Browse Books"
            className="rounded-lg shadow-xl"
          />
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <img
            src={pic2}
            alt="Delivery"
            className="rounded-lg shadow-xl order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-4 text-[#0d141b] dark:text-slate-50">
              Step 2: Fast Delivery
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              We deliver your selected book within hours.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#0d141b] dark:text-slate-50">
              Step 3: Enjoy Reading
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Settle in with your book and enjoy the experience.
            </p>
          </div>
          <img
            src={pic3}
            alt="Enjoy Reading"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Steps;
