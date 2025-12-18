import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";



const FAQSection = () => {
  const faqs = [
    {
      question: "How do I request a book delivery?",
      answer:
        "Simply browse our catalog, select the books you want, and choose a convenient delivery time. We'll handle the rest.",
    },
    {
      question: "Can I borrow books from multiple libraries?",
      answer:
        "Yes! Our system allows you to request books from multiple libraries across the city in a single order.",
    },
    {
      question: "What is the return process?",
      answer:
        "When you're done with your books, schedule a pickup through our app or website, and we’ll collect them from your doorstep.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "No. BookCourier is free to use. You only pay for delivery services if applicable in your area.",
    },
    {
      question: "How do I track my delivery?",
      answer:
        "Once your order is confirmed, you'll receive real-time updates via email and in the BookCourier app.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-slate-900 dark:bg-slate-900 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] dark:text-slate-50">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Get answers to the most common questions about using BookCourier.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800/50 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-bold text-[#0d141b] dark:text-slate-50">
                {faq.question}
              </span>
              <span className="material-symbols-outlined text-2xl text-primary">
                {openIndex === index ? <IoIosArrowDropup/> :<IoIosArrowDropdown/>}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
