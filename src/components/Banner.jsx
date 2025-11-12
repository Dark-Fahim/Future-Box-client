
import { CalendarDays, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";


// const container = (delay) =>({
//   hidden: {
//     opacity: 0,
//     y: 50,
//     transition: {
//       type: 'spring',
//       duration: 1.5,
//       delay: delay
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 1.5,
//       delay: delay
//     },
//   }
// })
const banner = (delay) => ({
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
const container = (delay) => ({
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

const Banner = () => {
  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-b from-white to-indigo-50 dark:from-[#121212] dark:to-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10">

        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Discover & Join the Best Events</span>
          </div>

          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            whileInView={'show'}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Connect, Experience, and Celebrate with{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              EventSphere
            </span>
          </motion.h1>

          <motion.p
            variants={container(0.8)}
            initial="hidden"
            whileInView={'show'}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Your ultimate platform to explore, create, and manage events effortlessly.
            Join thousands of people making memories together.
          </motion.p>

          <motion.div
            variants={container(1)}
            initial="hidden"
            whileInView={'show'}
            className="flex justify-center md:justify-start gap-4 pt-2">
            <Link
              to="/events"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-lg font-medium transition"
            >
              Explore Events
            </Link>
            <Link
              to="/create-event"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 dark:text-indigo-400 dark:border-indigo-400 rounded-lg text-lg font-medium transition"
            >
              Create Event
            </Link>
          </motion.div>
        </div>


        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center ">
          <div className="relative">
            <motion.img
              variants={banner(0.5)}
              initial="hidden"
              whileInView={'show'}
              src="https://i.ibb.co.com/4gf2hr0g/Gemini-Generated-Image-xlud06xlud06xlud.png"
              alt="Event illustration"
              className="w-[90%] md:w-[80%] max-w-md mx-auto drop-shadow-xl"
            />
            <motion.div
              variants={banner(0.8)}
              initial="hidden"
              whileInView={'show'}
              className="absolute bottom-4 left-4 bg-white/80 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-md flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <CalendarDays className="w-4 h-4 text-indigo-500" />
              <span>Upcoming: Tech Expo 2025</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
