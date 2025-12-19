import React from "react";

const ContactPage = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-slate-800">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-3xl font-extrabold text-[#0d141b] dark:text-slate-50">
          Contact Us
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have questions or need help? Fill out the form or reach out directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-[#0d141b] dark:text-slate-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#0d141b] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-[#0d141b] dark:text-slate-200">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#0d141b] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-[#0d141b] dark:text-slate-200">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#0d141b] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-[#0d141b] dark:text-slate-50 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Email: <a href="mailto:support@bookcourier.com" className="text-primary hover:underline">support@bookcourier.com</a>
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Phone: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <iframe
              title="Library Headquarters Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086252319407!2d-122.40136348468158!3d37.793631979756746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b873ab1f%3A0x9b0c6c79b56a1c14!2sSan%20Francisco%20Public%20Library!5e0!3m2!1sen!2sus!4v1697056123456!5m2!1sen!2sus"
              className="w-full h-64 md:h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
