import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-900">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-[rgb(33,94,152)] dark:text-[rgb(33,94,152)]">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[rgb(33,94,152)] dark:text-[rgb(33,94,152)]">
                BookCourier
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              Your local libraries, delivered to your door.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-4">

            {/* Services */}
            <div>
              <p className="font-bold text-white dark:text-white">
                Services
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white dark:text-white">
                <li><Link to="/" className="footer-link hover:underline">Book Delivery</Link></li>
                <li><Link to="/" className="footer-link hover:underline">Library Pickup</Link></li>
                <li><Link to="/" className="footer-link hover:underline">Our Fleet</Link></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <p className="font-bold text-white dark:text-white">
                About Us
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white dark:text-white">
                <li><Link to="/" className="footer-link hover:underline">Our Story</Link></li>
                <li><Link to="/" className="footer-link hover:underline">Careers</Link></li>
                <li><Link to="/" className="footer-link hover:underline">Press</Link></li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <p className="font-bold text-white dark:text-white">
                Helpful Links
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white dark:text-white">
                <li><Link to="/" className="footer-link hover:underline">Contact</Link></li>
                <li><Link to="/" className="footer-link hover:underline">FAQs</Link></li>
                <li><Link to="/" className="footer-link hover:underline">Live Chat</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="font-bold text-white dark:text-white">
                Legal
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white dark:text-white">
                <li><Link to="/" className="footer-link hover:underline">Privacy Policy</Link></li>
                <li><Link to="/" className="footer-link hover:underline">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 flex items-center justify-center">
          <p className=" text-center text-slate-500 dark:text-slate-400">
            © 2024 BookCourier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
