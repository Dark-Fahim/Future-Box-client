import React from "react";
import { Users, Globe2, Heart, Leaf, Star } from "lucide-react";
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


const members = [
  {
    name: "Kamrul Hasan",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maya Hasan",
    role: "Event Coordinator",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rafiul Islam",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Airin Nila",
    role: "Marketing Lead",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

const About = () => {
  useDynamicTitle('About || EventSphere')
  return (
    <section className="bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-gray-100 transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1
          variants={container(.3)}
          initial="hidden"
          whileInView={'show'}
          className="text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-indigo-600 dark:text-indigo-400">EventSphere</span>
        </motion.h1>
        <motion.p
          variants={container(.5)}
          initial="hidden"
          whileInView={'show'}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          We’re a community-driven platform dedicated to creating and joining events that
          make the world cleaner, greener, and more connected.
        </motion.p>
      </div>


      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-2xl transition">
          <motion.h2
            variants={fadeLeft(.3)}
            initial="hidden"
            whileInView={'show'}
            className="text-2xl font-semibold mb-3">🌱 Our Mission</motion.h2>
          <motion.p
            variants={fadeLeft(.5)}
            initial="hidden"
            whileInView={'show'}
            className="text-gray-600 dark:text-gray-400">
            Our mission is to empower individuals and organizations to create positive
            social and environmental impact through organized community events.
            From cleaning drives to donation camps — we aim to build awareness and action.
          </motion.p>
        </div>

        <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-2xl transition">
          <motion.h2
            variants={fadeRight(.3)}
            initial="hidden"
            whileInView={'show'}
            className="text-2xl font-semibold mb-3">🌍 Our Vision</motion.h2>
          <motion.p
            variants={fadeRight(.5)}
            initial="hidden"
            whileInView={'show'}
            className="text-gray-600 dark:text-gray-400">
            We envision a world where every community is active, sustainable, and
            compassionate — working hand in hand to protect nature and uplift people in
            need.
          </motion.p>
        </div>
      </div>


      <div className="bg-indigo-600 dark:bg-indigo-500 py-20 text-white mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
          <div>
            <motion.div
              variants={container(.3)}
              initial="hidden"
              whileInView={'show'}
            >
              <Users className="w-10 h-10 mx-auto mb-2" />
            </motion.div>
            <motion.h3
              variants={container(.4)}
              initial="hidden"
              whileInView={'show'}
              className="text-3xl font-bold">5K+</motion.h3>
            <motion.p
              variants={container(.5)}
              initial="hidden"
              whileInView={'show'}
              className="opacity-90">Active Volunteers</motion.p>
          </div>
          <div>
            <motion.div
              variants={container(.4)}
              initial="hidden"
              whileInView={'show'}
            >
              <Globe2 className="w-10 h-10 mx-auto mb-2" />
            </motion.div>
            <motion.h3
              variants={container(.5)}
              initial="hidden"
              whileInView={'show'}
              className="text-3xl font-bold">120+</motion.h3>
            <motion.p
              variants={container(.6)}
              initial="hidden"
              whileInView={'show'}
              className="opacity-90">Cities Covered</motion.p>
          </div>
          <div>
            <motion.div
              variants={container(.5)}
              initial="hidden"
              whileInView={'show'}
            >

              <Leaf className="w-10 h-10 mx-auto mb-2" />
            </motion.div>
            <motion.h3
              variants={container(.6)}
              initial="hidden"
              whileInView={'show'}
              className="text-3xl font-bold">8K+</motion.h3>
            <motion.p
              variants={container(.7)}
              initial="hidden"
              whileInView={'show'}
              className="opacity-90">Trees Planted</motion.p>
          </div>
          <div>
            <motion.div
              variants={container(.6)}
              initial="hidden"
              whileInView={'show'}
            >

              <Heart className="w-10 h-10 mx-auto mb-2" />
            </motion.div>
            <motion.h3
              variants={container(.7)}
              initial="hidden"
              whileInView={'show'}
              className="text-3xl font-bold">300+</motion.h3>
            <motion.p
              variants={container(.8)}
              initial="hidden"
              whileInView={'show'} className="opacity-90">Events Organized</motion.p>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          variants={container(.4)}
          initial="hidden"
          whileInView={'show'}
          className="text-3xl md:text-4xl font-bold mb-10">
          Meet Our <span className="text-indigo-600 dark:text-indigo-400">Team</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {members.map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <motion.img
                variants={container(.5)}
                initial="hidden"
                whileInView={'show'}
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-indigo-500/30"
              />
              <motion.h3
              variants={container(.6)}
              initial="hidden"
              whileInView={'show'}
               className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </motion.h3>
              <motion.p variants={container(.7)}
              initial="hidden"
              whileInView={'show'}
               className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                {member.role}
              </motion.p>
              <motion.div
              variants={container(.8)}
              initial="hidden"
              whileInView={'show'}
               className="mt-3 flex justify-center text-yellow-400">
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
