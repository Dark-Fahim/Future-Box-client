import React from "react";
import { Users, Globe2, Heart, Leaf, Star } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-gray-100 transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-indigo-600 dark:text-indigo-400">EventSphere</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          We’re a community-driven platform dedicated to creating and joining events that
          make the world cleaner, greener, and more connected.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-3">🌱 Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our mission is to empower individuals and organizations to create positive
            social and environmental impact through organized community events.
            From cleaning drives to donation camps — we aim to build awareness and action.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-3">🌍 Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We envision a world where every community is active, sustainable, and
            compassionate — working hand in hand to protect nature and uplift people in
            need.
          </p>
        </div>
      </div>

      
      <div className="bg-indigo-600 dark:bg-indigo-500 py-20 text-white mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
          <div>
            <Users className="w-10 h-10 mx-auto mb-2" />
            <h3 className="text-3xl font-bold">5K+</h3>
            <p className="opacity-90">Active Volunteers</p>
          </div>
          <div>
            <Globe2 className="w-10 h-10 mx-auto mb-2" />
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="opacity-90">Cities Covered</p>
          </div>
          <div>
            <Leaf className="w-10 h-10 mx-auto mb-2" />
            <h3 className="text-3xl font-bold">8K+</h3>
            <p className="opacity-90">Trees Planted</p>
          </div>
          <div>
            <Heart className="w-10 h-10 mx-auto mb-2" />
            <h3 className="text-3xl font-bold">300+</h3>
            <p className="opacity-90">Events Organized</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Meet Our <span className="text-indigo-600 dark:text-indigo-400">Team</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            {
              name: "Ador Ahmed",
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
              name: "Nusrat Jahan",
              role: "Marketing Lead",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-indigo-500/30"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                {member.role}
              </p>
              <div className="mt-3 flex justify-center text-yellow-400">
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
