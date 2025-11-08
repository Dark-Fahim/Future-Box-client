import React, { useState } from "react";
import { ChevronDown, LogOut, PlusCircle, Settings2, Users, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import logo from '/logo.png'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = false;
  const user = {
    name: "Ador Rahman",
    avatar: "https://i.pravatar.cc/100?img=5",
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#121212]/70 border-b border-gray-200 dark:border-gray-800 transition">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            EventSphere
          </span>
        </div>

        
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition font-medium ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `transition font-medium ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`
            }
          >
            Upcoming Events
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition font-medium ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition font-medium ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        
        <div className="flex items-center gap-4 relative">
          {!isLoggedIn ? (
            <Link to={'/login'} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition">
              Login
            </Link>
          ) : (
            <div className="relative">
              
              <div
                className="group flex items-center gap-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover"
                  />
                  
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm text-white bg-black/80 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                    {user.name}
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2 animate-fadeIn">
                  <NavLink
                    to="/create-event"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <PlusCircle className="w-4 h-4" />
                    Create Event
                  </NavLink>
                  <NavLink
                    to="/manage-events"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <Settings2 className="w-4 h-4" />
                    Manage Events
                  </NavLink>
                  <NavLink
                    to="/joined-events"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <Users className="w-4 h-4" />
                    Joined Events
                  </NavLink>
                  <hr className="border-gray-200 dark:border-gray-700 my-1" />
                  <NavLink
                    to="/logout"
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </NavLink>
                </div>
              )}
            </div>
          )}

          
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1c1c1e] border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center py-4 space-y-3">
            <NavLink
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming Events
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
