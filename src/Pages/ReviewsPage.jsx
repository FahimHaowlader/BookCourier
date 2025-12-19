import { useState } from "react";
import pic from "../assets/person1.png";
import pic2 from "../assets/person2.png";
import pic3 from "../assets/person3.png";
const ReviewsPage = () => {
 const reviews = [
    {
      name: "Sarah J.",
      role: "Avid Reader",
      img: pic,
      message: "BookCourier has completely changed my reading habits. I'm reading more than ever before because it's just so convenient. The selection is incredible!",
    },
    {
      name: "Sarah J.",
      role: "Avid Reader",
      img:pic2,
      message: "BookCourier has completely changed my reading habits. I'm reading more than ever before because it's just so convenient. The selection is incredible!",
    },
    {
      name: "Sarah J.",
      role: "Avid Reader",
      img:pic3,
      message: "BookCourier has completely changed my reading habits. I'm reading more than ever before because it's just so convenient. The selection is incredible!",
    },
    {
      name: "Sarah J.",
      role: "Avid Reader",
      img: pic,
      message: "BookCourier has completely changed my reading habits. I'm reading more than ever before because it's just so convenient. The selection is incredible!",
    },
    {
      name: "Michael B.",
      role: "Book Club President",
      img: pic2,
      message: "As a busy professional, I never had time to go to the library. This service is a lifesaver. Fast, reliable, and the app is super easy to use. Highly recommend!",
    },
    {
      name: "Emily R.",
      role: "Parent & Educator",
      img: pic3,
      message: "My kids are so excited every time the BookCourier package arrives. It's like a special gift just for them. It's fostered a real love for reading in our home.",
    },
    {
      name: "Emily R.",
      role: "Parent & Educator",
      img: pic,
      message: "My kids are so excited every time the BookCourier package arrives. It's like a special gift just for them. It's fostered a real love for reading in our home.",
    },
    {
      name: "Emily R.",
      role: "Parent & Educator",
      img: pic3,
      message: "My kids are so excited every time the BookCourier package arrives. It's like a special gift just for them. It's fostered a real love for reading in our home.",
    },
  ];

  const reviewsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Slice reviews for current page
  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-slate-800 dark:bg-slate-800 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d141b] dark:text-slate-50">
          Readers Love Us
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Real feedback from our community of book lovers and library enthusiasts.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {currentReviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 gap-6"
          >
            <div className="">
              <img
                alt={review.name}
                src={review.img}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-primary"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className="text-primary text-3xl mr-2">“</span>
                <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl">{review.message}</p>
              </div>
              <p className="mt-4 font-bold text-[#0d141b] dark:text-slate-50">{review.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
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

export default ReviewsPage;

