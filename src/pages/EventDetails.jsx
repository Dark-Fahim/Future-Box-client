import React from "react";
import { CalendarDays, MapPin, User, Tag } from "lucide-react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useDynamicTitle from "../hooks/useDynamicTitle";

const EventDetails = () => {
    useDynamicTitle('Details || EventSphere')
    const navigate = useNavigate()
    const {user} = useAuth()
    const event = {
        title: "Community Beach Cleanup",
        description:
            "Join us in making our local beach cleaner and safer! We’ll provide all the necessary supplies — gloves, trash bags, and refreshments. Let’s come together to make a difference for our environment and have some fun along the way.",
        eventType: "Cleanup",
        thumbnail:
            "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80",
        location: "Cox’s Bazar Beach, Bangladesh",
        date: "2025-12-15T10:00:00",
        organizer: "GreenEarth Volunteers",
    };

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
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-indigo-500" />
                                <span>{event.organizer}</span>
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
