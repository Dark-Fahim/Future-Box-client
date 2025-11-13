import React, { useState } from "react";
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings2,
  Users,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const container = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay
    },
  }
})

const fadeLeft = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay
    },
  }
})
const fadeRight = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay
    },
  }
})

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logOut } = useAuth()

  const handleLogout = () => {
    
    logOut()
      .then(() => {
        
        Swal.fire({
          title: "Logout Success",
          icon: "success",
          draggable: false
        });
      })
      .catch(() => {

      })
  }



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upcoming Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#121212]/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        <motion.div
          
          className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
          <Link to={'/'} className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            EventSphere
          </Link>
        </motion.div>


        <motion.div
          
          className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition font-medium ${isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>


        <motion.div
          
          className="flex flex-wrap justify-center items-center gap-4 relative">
          <ThemeToggle />

          {!user ? (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
            >
              Login
            </NavLink>
          ) : (
            <div className="relative">

              <div
                className="group flex items-center gap-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="relative">
                  <img
                    src={user.photoURL || "https://i.pravatar.cc/100?img=5"}
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover"
                  />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm text-white bg-black/80 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                    {user.displayName}
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </div>


              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2 animate-fadeIn">
                  <NavLink
                    to="/create-event"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <PlusCircle className="w-4 h-4" /> Create Event
                  </NavLink>
                  <NavLink
                    to="/manage-events"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <Settings2 className="w-4 h-4" /> Manage Events
                  </NavLink>
                  <NavLink
                    to="/joined-events"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <Users className="w-4 h-4" /> Joined Events
                  </NavLink>
                  <hr className="border-gray-200 dark:border-gray-700 my-1" />
                  <button onClick={handleLogout}

                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>


      <div
        className={`md:hidden bg-white dark:bg-[#1c1c1e] border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
      >
        <div
          className={`flex flex-col items-center space-y-3 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
