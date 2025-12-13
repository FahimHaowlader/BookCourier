import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    name: "Sarah J.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmBahKYpcGslfbS2mqgBddZBUgpicCKhDQnw9Zz-Fi37ltjGo3iEZl2sEN8Wu8jkmfh0lFzFxFNCcYbqNuxkQXVfbI1vf6AKCTHS_VXxSADx0DSh7DdOpWlqed-uZ9P1ChP6Gss5MfOqIfm5Kgoe7DecuBDMGJ8TGX6giaHfwzVc4ImB6uouC3-g2T50-a_G_CdbH5gRv4EMc_-ZZ8E6u-Bfc7FbXMaFT03xBNhWtfwAnpR84-q5E1LN2szuNDePjltab6ctEGio",
    rating: 5,
    time: "2 days ago",
    comment:
      "An absolutely captivating read. Matt Haig has a unique way of exploring complex philosophical ideas with such simplicity and heart. I couldn't put it down!",
  },
  {
    id: 2,
    name: "Michael R.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmBahKYpcGslfbS2mqgBddZBUgpicCKhDQnw9Zz-Fi37ltjGo3iEZl2sEN8Wu8jkmfh0lFzFxFNCcYbqNuxkQXVfbI1vf6AKCTHS_VXxSADx0DSh7DdOpWlqed-uZ9P1ChP6Gss5MfOqIfm5Kgoe7DecuBDMGJ8TGX6giaHfwzVc4ImB6uouC3-g2T50-a_G_CdbH5gRv4EMc_-ZZ8E6u-Bfc7FbXMaFT03xBNhWtfwAnpR84-q5E1LN2szuNDePjltab6ctEGio",
    rating: 4,
    time: "1 week ago",
    comment:
      "A very thought-provoking concept. While I enjoyed the journey, the ending felt a bit predictable. Still, a worthwhile read that will make you reflect on your own life choices.",
  },
  {
    id: 3,
    name: "Emily C.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmBahKYpcGslfbS2mqgBddZBUgpicCKhDQnw9Zz-Fi37ltjGo3iEZl2sEN8Wu8jkmfh0lFzFxFNCcYbqNuxkQXVfbI1vf6AKCTHS_VXxSADx0DSh7DdOpWlqed-uZ9P1ChP6Gss5MfOqIfm5Kgoe7DecuBDMGJ8TGX6giaHfwzVc4ImB6uouC3-g2T50-a_G_CdbH5gRv4EMc_-ZZ8E6u-Bfc7FbXMaFT03xBNhWtfwAnpR84-q5E1LN2szuNDePjltab6ctEGio",
    rating: 5,
    time: "3 weeks ago",
    comment:
      "This book was a warm hug. It's a beautiful story about hope, regret, and the infinite possibilities that life holds. It came into my life just when I needed it.",
  },
];

export default function BookDetailsPage() {
  const [reviews, setReviews] = useState(initialReviews);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-8 md:py-12">
      {/* Breadcrumbs */}
      {/* <div className="flex flex-wrap gap-2 text-sm mb-6">
        <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium" href="#">
          Home
        </a>
        <span className="text-gray-400 dark:text-gray-500">/</span>
        <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium" href="#">
          Search Results
        </a>
        <span className="text-gray-400 dark:text-gray-500">/</span>
        <span className="text-[#0d141b] dark:text-white font-medium">The Midnight Library</span>
      </div> */}

      {/* Book Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-1">
          <div
            className="w-full aspect-[2/3] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl shadow-lg"
            style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuBYuAiO0eetBh2vvMLoh74deHijI1BgCb_pRxY0X3UA7WdkB8cKbfpFrYHlh9cZf3YGIF4pjTaAuh49vU-HwT52RGYr4uTpKJioeWjrzquecxgQBrxLKAF0Lf7V0lrj5GiQhQrlGJSu-EfYNV70_ow5wP0yPY3x2LLZVMoVEP_B33MBu7ZhL5T75wMz5WkSEFoHSVcGLTB8uy9bS6WhCQmXYr5fQvPeK5JBOFX2AqHrKqcs0gQ9PsYyoWHulpAEs0qaI8xE6umb-0s)` }}
          ></div>
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <p className="text-primary dark:text-primary/90 text-sm font-bold uppercase tracking-wider">Fiction</p>
          <h1 className="text-[#0d141b] dark:text-[#0d141b] text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
            The Midnight Library
          </h1>
          <p className="text-slate-600 dark:text-slate-600 text-md">
            by <a className="hover:font-medium text-primary " href="#">Matt Haig</a>
          </p>
          {/* <div className="flex gap-2 pt-2 flex-wrap">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3">
              <span className="material-symbols-outlined text-primary text-base">auto_stories</span>
              <p className="text-primary text-sm font-medium">Fantasy Fiction</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3">
              <span className="material-symbols-outlined text-primary text-base">psychology</span>
              <p className="text-primary text-sm font-medium">Philosophical</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3">
              <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
              <p className="text-primary text-sm font-medium">Contemporary</p>
            </div>
          </div> */}

          <p className="mt-4 text-gray-800 dark:text-gray-800 leading-relaxed">
            Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be different if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?
          </p>
         { /* Action Buttons */}
            <div className="md:flex gap-4 space-y-3">  
          <button
          className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
            <span className="material-symbols-outlined">shopping_cart</span> Order Now
          </button>
          <button
          className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
            <span className="material-symbols-outlined">shopping_cart</span> Order Now
          </button>
            </div>
          {/* Book Details */}
          <div className="mt-2 pt-6 border-t border-gray-200 dark:border-gray-200">
            <h3 className="text-lg font-bold text-[#0d141b] dark:text-[#0d141b] mb-4">Book Details</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-600">
              <li className="grid grid-cols-3 gap-2">
                <span className="font-semibold  text-gray-800 dark:text-gray-800">Publisher :</span> <span className="col-span-2">Viking</span>
              </li>
              <li className="grid grid-cols-3 gap-2">
                <span className="font-semibold  text-gray-800 dark:text-gray-800">Publication Date :</span> <span className="col-span-2">September 29, 2020</span>
              </li>
              <li className="grid grid-cols-3 gap-2">
                <span className="font-semibold  text-gray-800 dark:text-gray-800">Language :</span> <span className="col-span-2">English</span>
              </li>
              <li className="grid grid-cols-3 gap-2">
                <span className="font-semibold  text-gray-800 dark:text-gray-800">Page Count :</span> <span className="col-span-2">304</span>
              </li>
              <li className="grid grid-cols-3 gap-2">
                <span className="font-semibold  text-gray-800 dark:text-gray-800">ISBN-13 :</span> <span className="col-span-2">978-0525559474</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8 md:mt-12 pt-8 border-t border-slate-200 dark:border-slate-200">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <h2 className="text-4xl font-bold text-[#0d141b] dark:text-[#0d141b]">Reviews & Ratings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            {/* Overall rating summary */}
            <div className="bg-background-light dark:bg-slate-200 border border-slate-300 dark:border-slate-300 p-6 rounded-xl  sticky top-24">
              <h3 className="text-xl font-bold mb-1 text-[#0d141b] dark:text-[#0d141b]">Overall Rating</h3>
              <p className="text-sm text-gray-600 dark:text-gray-600 mb-6">Based on 1,234 reviews</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-5xl font-black text-[#0d141b] dark:text-[#0d141b]">4.5</div>
                <div className="flex text-yellow-400">
                  {/* <span className="material-symbols-outlined filled-star text-3xl">star</span>
                  <span className="material-symbols-outlined filled-star text-3xl">star</span>
                  <span className="material-symbols-outlined filled-star text-3xl">star</span>
                  <span className="material-symbols-outlined filled-star text-3xl">star</span> */}
                  {/* <span className="material-symbols-outlined filled-star text-yellow-400/40 text-3xl">star_half</span> */}
                </div>
              </div>
              {/* Ratings breakdown can be added here */}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {/* Leave a review form */}
            <div className="bg-slate-200 dark:bg-slate-200 p-6 rounded-xl border border-slate-300 dark:border-slate-300">
              <h3 className="text-xl font-bold mb-4 text-[#0d141b] dark:text-[#0d141b]">Leave a Review</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-600 mb-2">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" className="hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors">
                        <span className="material-symbols-outlined text-4xl">star</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-800 mb-2" htmlFor="review">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    rows={5}
                    placeholder="Share your thoughts about the book..."
                    className="form-textarea w-full p-4 rounded-lg border text-black border-slate-400 dark:border-slate-400 bg-slate-300 dark:bg-slate-300 focus:ring-primary focus:border-primary text-base placeholder:text-gray-700 dark:placeholder:text-gray-700"
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" 
                  className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>

            {/* Reviews list */}
            {reviews.map((review) => (
              <div key={review.id} className="flex items-start gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square rounded-full size-11 shrink-0"
                  style={{ backgroundImage: `url(${review.avatar})` }}
                ></div>
                <div className="flex-1 border-b border-slate-200 dark:border-slate-200 pb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-[#0d141b] dark:text-[#0d141b]">{review.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-600">{review.time}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`material-symbols-outlined text-lg ${i < review.rating ? "filled-star" : "text-yellow-400/40"}`}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-gray-500 dark:text-gray-500 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
