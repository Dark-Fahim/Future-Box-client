import React from "react";
import { CalendarDays, Users, Sparkles, Settings, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Discover Events Easily",
    description:
      "Explore thousands of events happening around you — concerts, workshops, tech expos, and more. Filter by category, location, or time to find your perfect event.",
    icon: <CalendarDays className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    delay: 0.2
  },
  {
    title: "Create & Manage Effortlessly",
    description:
      "Host your own events in minutes. Manage registrations, update details, and track attendees — all from one simple dashboard.",
    icon: <Settings className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    delay: 0.4
  },
  {
    title: "Connect with People",
    description:
      "Build communities around shared interests. Chat with attendees, network with organizers, and stay connected before and after events.",
    icon: <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    delay: 0.6
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get AI-powered event suggestions based on your interests, attendance history, and favorite categories — never miss an event again!",
    icon: <Star className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    delay: 0.8
  },
];

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

const box = (delay) => ({
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

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#121212] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">

        <div className="mb-12">
          <div className="flex justify-center items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-2">
            <Sparkles className="w-5 h-5" />
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              whileInView={'show'}
            >Why Choose EventSphere</motion.span>
          </div>
          <motion.h2
            variants={container(0.6)}
            initial="hidden"
            whileInView={'show'} className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Everything You Need for a Great Event Experience
          </motion.h2>
          <motion.p
            variants={container(0.8)}
            initial="hidden"
            whileInView={'show'}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            EventSphere gives you the tools to explore, create, and connect — all in one beautifully simple platform.
          </motion.p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              

              key={index}
              className="bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView={'show'}
                className="flex justify-center mb-6">{feature.icon}</motion.div>
              <motion.h3
                variants={container(0.6)}
                initial="hidden"
                whileInView={'show'}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </motion.h3>
              <motion.p
                variants={container(0.8)}
                initial="hidden"
                whileInView={'show'}
                className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
