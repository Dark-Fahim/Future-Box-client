import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-indigo-50 dark:bg-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        
        <div className="mb-8">
          <div className="flex justify-center items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-2">
            <Mail className="w-5 h-5" />
            <span>Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
            Get the latest events, updates, and exclusive offers delivered straight to your inbox.
          </p>
        </div>

        
        <form className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-white dark:bg-[#121212] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
