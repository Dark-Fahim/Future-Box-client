import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Tag } from "lucide-react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const JoinedEvents = () => {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.email) {
      setJoinedEvents([]);
      return;
    }

    let mounted = true;
    axios
      .get(`http://localhost:3000/joined-events?email=${encodeURIComponent(user.email)}`)
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
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-500 pt-24 px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          My Joined Events
        </h2>

        {joinedEvents.length === 0 ? (
          <div className="py-20 text-center text-gray-500 dark:text-gray-400">
            You haven't joined any events yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {joinedEvents.map((event) => (
              <article
                key={event._id}
                className="flex flex-col h-full bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                
                <div className="w-full h-44 md:h-48 lg:h-56 flex-shrink-0">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  
                  <div className="mt-auto pt-2">
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

                    <button
                      className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300"
                      
                    >
                      View Details
                    </button>
                  </div>
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
