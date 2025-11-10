import React from "react";
import { NavLink } from "react-router";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

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

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">



          <div className="md:w-1/4">
            <motion.h2
              variants={container(.3)}
              initial="hidden"
              whileInView={'show'}
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              EventSphere
            </motion.h2>
            <motion.p
              variants={container(.5)}
              initial="hidden"
              whileInView={'show'}
              className="text-gray-600 dark:text-gray-400 text-sm">
              Explore, create, and manage your events effortlessly. Join thousands of people making memories together.
            </motion.p>
          </div>


          <div className="md:w-1/4">
            <motion.h3
              variants={container(.3)}
              initial="hidden"
              whileInView={'show'}
              className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </motion.h3>
            <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
              <motion.li
                variants={container(.4)}
                initial="hidden"
                whileInView={'show'}
              >
                <NavLink to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                variants={container(.4)}
                initial="hidden"
                whileInView={'show'}
              >
                <NavLink to="/events" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Upcoming Events
                </NavLink>
              </motion.li>
              <motion.li
                variants={container(.5)}
                initial="hidden"
                whileInView={'show'}
              >
                <NavLink to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  About
                </NavLink>
              </motion.li>
              <motion.li
                variants={container(.6)}
                initial="hidden"
                whileInView={'show'}
              >
                <NavLink to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Contact
                </NavLink>
              </motion.li>
            </ul>
          </div>


          <div className="md:w-1/4">
            <motion.h3
              variants={container(.3)}
              initial="hidden"
              whileInView={'show'}
              className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Contact Us
            </motion.h3>
            <motion.p
              variants={container(.5)}
              initial="hidden"
              whileInView={'show'}

              className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@eventsphere.com
            </motion.p>
            <div className="flex items-center gap-4 mt-4">
              <motion.a
                variants={container(.3)}
                initial="hidden"
                whileInView={'show'}
                href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={container(.4)}
                initial="hidden"
                whileInView={'show'}
                href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={container(.5)}
                initial="hidden"
                whileInView={'show'}
                href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>


          <div className="md:w-1/4">
            <motion.h3
              variants={container(.3)}
              initial="hidden"
              whileInView={'show'}
              className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Newsletter
            </motion.h3>
            <motion.p
              variants={container(.5)}
              initial="hidden"
              whileInView={'show'}
              className="text-gray-600 dark:text-gray-400 text-sm">
              Subscribe to get latest updates and offers.
            </motion.p>
          </div>

        </div>



        <div
          className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <motion.p
            variants={container(.6)}
            initial="hidden"
            whileInView={'show'}
          >
            &copy; {new Date().getFullYear()} EventSphere. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
