import React from "react";
import pic from "../assets/person2.png";
import pic2 from "../assets/person1.png";
import pic3 from "../assets/person3.png";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Avid Reader",
    text: "BookCourier has completely changed my reading habits. I'm reading more than ever before because it's just so convenient. The selection is incredible!",
    img: pic,
  },
  {
    name: "Michael B.",
    role: "Book Club President",
    text: "As a busy professional, I never had time to go to the library. This service is a lifesaver. Fast, reliable, and the app is super easy to use. Highly recommend!",
    img: pic2,
  },
  {
    name: "Emily R.",
    role: "Parent & Educator",
    text: "My kids are so excited every time the BookCourier package arrives. It's like a special gift just for them. It's fostered a real love for reading in our home.",
    img: pic3,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl  font-bold leading-tight tracking-tight text-[#0d141b] dark:text-slate-50">
          What Our Readers Are Saying
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 mx-auto max-w-2xl px-2">
          We're proud to have delivered thousands of stories. Here's what some of our members have to say.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-16 lg:mx-24 xl:mx-40">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-slate-800 dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex-grow">
              <p className="text-slate-600 dark:text-slate-300">"{t.text}"</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-200 flex items-center gap-4">
              <img alt={t.name} className="w-12 h-12 rounded-full object-cover" src={t.img} />
              <div>
                <p className="font-bold text-[#0d141b] dark:text-slate-50">{t.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
