; import "react-datepicker/dist/react-datepicker.css";
import { PlusCircle, Calendar, MapPin, Image, FileText, Type } from "lucide-react";
import { Link } from "react-router";
import useDynamicTitle from "../hooks/useDynamicTitle";
import { useEffect, useState } from "react";

import axios from "axios";

const UpcomingEvents = () => {
    useDynamicTitle('UpcomingEvents || EventSphere')
    
    const [events, setEvents]=  useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/events')
        .then(data => {
            console.log(data.data);
            setEvents(data.data)
        })
    }, [])

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#121212] transition-colors duration-500 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
                        Explore upcoming community activities and be part of meaningful change.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link to={'/create-event'}

                            className="mt-6 px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition flex items-center gap-2 mx-auto"
                        >
                            <PlusCircle className="w-5 h-5" /> Create Event
                        </Link>
                    </div>
                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {event.title}
                                </h3>

                                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 gap-3">
                                    <Calendar className="w-4 h-4" /> {event.date}
                                </div>
                                <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400 gap-3">
                                    <MapPin className="w-4 h-4" /> {event.location}
                                </div>
                                <div className="mt-3 inline-block px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-800/40 text-indigo-600 dark:text-indigo-300 rounded-full">
                                    {event.eventType}
                                </div>
                                <div className="flex my-5">
                                    <Link to={`/events/${event._id}`} className="text-center w-full py-2  bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-lg font-medium transition">View Details </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </section>
    );
};

export default UpcomingEvents;
