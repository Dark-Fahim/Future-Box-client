import React from "react";
import { CalendarDays, MapPin, User, Tag } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useDynamicTitle from "../hooks/useDynamicTitle";

const EventDetails = () => {
    const event = useLoaderData()
    useDynamicTitle('Details || EventSphere')
    const navigate = useNavigate()
    const {user} = useAuth()
    

    const formattedDate = new Date(event.date).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });


    const handleJoinBtn = () => {
        if(!user){
            return navigate('/login')
        }

    }


    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-500">
            <div className="max-w-5xl mx-auto mt-16 p-6">
                <div className="bg-white dark:bg-[#1c1c1e] rounded-xl shadow-lg overflow-hidden transition-colors duration-500">
                    <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-72 object-cover"
                    />


                    <div className="p-6 md:p-10 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                            {event.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="w-5 h-5 text-indigo-500" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-indigo-500" />
                                <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-indigo-500" />
                                <span>{event.eventType}</span>
                            </div>
                            
                        </div>

                        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                            {event.description}
                        </p>


                        <div className="pt-4">
                            <button onClick={handleJoinBtn} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                                Join This Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
