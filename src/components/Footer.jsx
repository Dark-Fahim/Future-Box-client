import React from "react";
import { NavLink } from "react-router";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          


          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              EventSphere
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Explore, create, and manage your events effortlessly. Join thousands of people making memories together.
            </p>
          </div>

          
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
              <li>
                <NavLink to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Upcoming Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@eventsphere.com
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Subscribe to get latest updates and offers.
            </p>
          </div>

        </div>

        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} EventSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
