import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Tag } from "lucide-react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { motion } from "framer-motion";
import useAxiosSecure from "../hooks/useAxiosSecure";
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

const JoinedEvents = () => {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const { user } = useAuth();
  const secureAxios = useAxiosSecure()

  useEffect(() => {
    if (!user?.email) {
      setJoinedEvents([]);
      return;
    }

    let mounted = true;
    secureAxios?.get(`https://future-box-server.vercel.app/joined-events?email=${encodeURIComponent(user.email)}`)
      .then((res) => {
        if (mounted) setJoinedEvents(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to load joined events:", err);
        if (mounted) setJoinedEvents([]);
      });

    return () => {
      mounted = false;
    };
  }, [secureAxios, user.email]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-500 pt-24 px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={container(.3)}
          initial="hidden"
          whileInView={'show'}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          My Joined Events
        </motion.h2>

        {joinedEvents.length === 0 ? (
          <motion.div
            variants={container(.4)}
            initial="hidden"
            whileInView={'show'}
            className="py-20 text-center text-gray-500 dark:text-gray-400">
            You haven't joined any events yet.
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {joinedEvents.map((event) => (
              <article
                key={event._id}
                className="flex flex-col h-full bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >

                <motion.div
                  variants={container(.4)}
                  initial="hidden"
                  whileInView={'show'}
                  className="w-full h-44 md:h-48 lg:h-56 flex-shrink-0">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>


                <div className="p-5 flex flex-col flex-1">
                  <motion.h3
                    variants={container(.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                    {event.title}
                  </motion.h3>


                  <motion.p
                    variants={container(.6)}
                    initial="hidden"
                    whileInView={'show'}
                    className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </motion.p>


                  <motion.div
                  variants={container(.7)}
                    initial="hidden"
                    whileInView={'show'}
                   className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="whitespace-nowrap">
                          {new Date(event.date).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="whitespace-nowrap">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag size={16} />
                        <span className="whitespace-nowrap">{event.eventType}</span>
                      </div>
                    </div>

                    <div>

                    <button
                      className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300"

                    >
                      View Details
                    </button>
                    </div>
                  </motion.div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvents;
