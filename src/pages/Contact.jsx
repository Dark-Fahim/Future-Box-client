
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import useDynamicTitle from "../hooks/useDynamicTitle";

const Contact = () => {
  useDynamicTitle('Contact || EventSphere')

  return (
    <div className="min-h-screen mt-10 bg-gray-100 dark:bg-[#121212] flex flex-col items-center justify-center px-6 py-16 transition-colors duration-500">
      <div className="max-w-4xl w-full bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-500">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">+880 1234 567890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  info@EventSphere.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Green Street, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div>
            
              <form  className="space-y-4">
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
              </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
