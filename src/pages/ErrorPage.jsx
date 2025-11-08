import React from "react";
import { Link } from "react-router"; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#121212] px-4 text-center transition-colors duration-500">
      <h1 className="text-9xl font-extrabold text-gray-300 dark:text-gray-700">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
      >
        Go Back Home
      </Link>

      
      <div className="mt-12">
        <svg
          className="w-64 h-64 mx-auto text-gray-200 dark:text-gray-800"
          fill="currentColor"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
