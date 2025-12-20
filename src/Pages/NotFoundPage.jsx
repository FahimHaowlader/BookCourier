import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-slate-800 dark:text-slate-800">
          Page Not Found
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center mt-6 rounded-lg bg-slate-800 hover:text-slate-800 hover:bg-slate-300 px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
