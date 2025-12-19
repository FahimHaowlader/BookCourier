import React from "react";
import ContactPage from "./ContactPage";
import pic from "../assets/person1.png";
import pic2 from "../assets/person2.png";
import pic3 from "../assets/person3.png";
const AboutPage = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 space-y-16 bg-slate-800">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d141b] dark:text-slate-50">
          About BookCourier
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Learn about our mission, vision, and the team dedicated to making library access easier for everyone.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-slate-50 mb-4">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-400">
            To deliver books from local libraries directly to your doorstep, making reading more accessible and convenient for everyone.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-slate-50 mb-4">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-400">
            To create a seamless connection between readers and libraries, fostering a love for reading and lifelong learning in every community.
          </p>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-[#0d141b] dark:text-slate-50 mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Alice M.", role: "Founder & CEO", img: pic },
            { name: "John D.", role: "CTO", img: pic2},
            { name: "Sarah L.", role: "Operations Manager", img: pic3 },
            { name: "Michael B.", role: "Head of Delivery", img: pic },
          ].map((member, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
              />
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-slate-50">{member.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Library Partners */}
      <div>
        <h2 className="text-3xl font-bold text-[#0d141b] dark:text-slate-50 mb-8 text-center">Our Library Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "New York Public Library",
            "Brooklyn Public Library",
            "Queens Public Library",
            "Chicago Public Library",
            "LA County Library",
          ].map((library, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800/50 px-6 py-4 rounded-xl shadow border border-slate-200 dark:border-slate-700">
              <p className="text-[#0d141b] dark:text-slate-50 font-medium">{library}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Timeline */}
      <div>
        <h2 className="text-3xl font-bold text-[#0d141b] dark:text-slate-50 mb-8 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-primary ml-8">
          {[
            { year: "2021", event: "BookCourier founded and launched in New York" },
            { year: "2022", event: "Expanded to 3 more cities and 10+ libraries" },
            { year: "2023", event: "Delivered over 50,000 books to readers" },
            { year: "2024", event: "Launched mobile app for easier requests" },
          ].map((item, idx) => (
            <div key={idx} className="mb-8 ml-4 relative">
              <div className="absolute -left-6 top-1 w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-slate-900"></div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.year}</p>
              <p className="text-[#0d141b] dark:text-slate-50 font-medium">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactPage/>
    </section>
  );
};

export default AboutPage;
