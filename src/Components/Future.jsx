import React from "react";
import { BookOpen, Star, Users } from "lucide-react";
import pic from '../assets/pic10.png';

const Future = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Endless Book Choices",
      desc: "Discover thousands of curated titles across all genres.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Built for Readers",
      desc: "A modern reading experience designed around your needs.",
    },
    {
      icon: <Star className="w-10 h-10 text-primary" />,
      title: "Carefully Curated",
      desc: "Only the best books make it into our recommendation lists.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-20 bg-slate-50 dark:bg-slate-900">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SECTION */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] dark:text-white mb-4">
            A Library Reimagined
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            Explore a modern way to read, discover, and fall in love with books 
            all over again. Your next favorite story is only a click away.
          </p>

          <div className="flex flex-col gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0d141b] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={pic}
            alt="Library Reimagined"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Future;
