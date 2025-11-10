
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import useDynamicTitle from "../hooks/useDynamicTitle";
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

const Contact = () => {
  useDynamicTitle('Contact || EventSphere')

  return (
    <div className="min-h-screen mt-10 bg-gray-100 dark:bg-[#121212] flex flex-col items-center justify-center px-6 py-16 transition-colors duration-500">
      <div className="max-w-4xl w-full bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-500">
        <motion.h2
          variants={container(.3)}
          initial="hidden"
          whileInView={'show'}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <motion.div
                variants={fadeLeft(.3)}
                initial="hidden"
                whileInView={'show'}
              >

                <FaPhoneAlt className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </motion.div>
              <motion.div
                variants={fadeLeft(.4)}
                initial="hidden"
                whileInView={'show'}
              >
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">+880 1234 567890</p>
              </motion.div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                variants={fadeRight(.4)}
                initial="hidden"
                whileInView={'show'}
              >

                <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </motion.div>
              <motion.div
                variants={fadeRight(.5)}
                initial="hidden"
                whileInView={'show'}
              >
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  info@EventSphere.com
                </p>
              </motion.div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                variants={container(.5)}
                initial="hidden"
                whileInView={'show'}
              >

                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </motion.div>
              <motion.div
                variants={container(.6)}
                initial="hidden"
                whileInView={'show'}
              >
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Green Street, Dhaka, Bangladesh
                </p>
              </motion.div>
            </div>
          </div>

          <div>

            <motion.form
            variants={container(.4)}
              initial="hidden"
              whileInView={'show'}
             className="space-y-4">
              <input
                
                type="text"
                name="name"
                placeholder="Your Name"

                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />

              <input
                
                type="email"
                name="email"
                placeholder="Your Email"

                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />

              <textarea
              
                name="message"
                placeholder="Your Message"
                rows={4}

                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </motion.form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
