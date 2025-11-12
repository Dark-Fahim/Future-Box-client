/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
    PlusCircle,
    Calendar as CalendarIcon,
    MapPin,
    Search,
} from "lucide-react";
import { Link } from "react-router";
import useDynamicTitle from "../hooks/useDynamicTitle";
import axios from "axios";
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

const UpcomingEvents = () => {
    useDynamicTitle("UpcomingEvents || EventSphere");

    const [events, setEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const type = filter === "All" ? "" : filter;
        
        let mounted = true;
        setLoading(true);
        axios
        .get("https://future-box-server.vercel.app/events", {
            params: {
                eventType: type,
                title: query.trim()
            }
        })
            .then((res) => {
                if (!mounted) return;
                const data = Array.isArray(res.data) ? res.data : [];
                setEvents(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch events:", err);
                setEvents([]);
                setLoading(false);
            });
        return () => {
            mounted = false;
        };
    }, [filter, query]);




    useEffect(() => {
        const now = new Date();
        const upcoming = events.filter((ev) => {
            if (!ev?.date) return false;
            const d = new Date(ev.date);
            if (isNaN(d.getTime())) return false;
            return d > now;
        });
        upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
        setUpcomingEvents(upcoming);
    }, [events]);


    const displayed = upcomingEvents

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#121212] transition-colors duration-500 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <motion.h1
                            variants={fadeLeft(.3)}
                            initial="hidden"
                            whileInView={'show'}
                            className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                            Upcoming Events
                        </motion.h1>
                        <motion.p
                            variants={fadeLeft(.5)}
                            initial="hidden"
                            whileInView={'show'}
                            className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Explore upcoming community activities and be part of meaningful change.
                        </motion.p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 lg:mt-0">
                        <motion.label
                            variants={fadeRight(.3)}
                            initial="hidden"
                            whileInView={'show'}

                            className="relative w-full sm:w-auto">
                            <div className="flex items-center bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-sm w-full">
                                <Search className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                                <input
                                    aria-label="Search events"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search events..."
                                    className="ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 w-full"
                                />
                            </div>
                        </motion.label>

                        <motion.div
                            variants={fadeRight(.5)}
                            initial="hidden"
                            whileInView={'show'}
                            className="flex items-center gap-2">
                            <select
                                aria-label="Filter events by type"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-100"
                            >
                                <option>All</option>
                                <option>Cleanup</option>
                                <option>Plantation</option>
                                <option>Donation</option>
                                <option>Workshop</option>
                            </select>
                        </motion.div>
                    </div>
                </header>

                <motion.div
                    variants={container(.3)}
                    initial="hidden"
                    whileInView={'show'}
                    className="text-center mb-12">
                    <div className="flex justify-center items-center">
                        <Link
                            to={"/create-event"}
                            className="mt-6 px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition flex items-center gap-2 mx-auto"
                        >
                            <PlusCircle className="w-5 h-5" /> Create Event
                        </Link>
                    </div>
                </motion.div>

                {loading ? (
                    <motion.div
                        variants={container(.4)}
                        initial="hidden"
                        whileInView={'show'}
                        className="text-center py-12 text-gray-600 dark:text-gray-300">Loading events…</motion.div>
                ) : displayed.length === 0 ? (
                    <div className="text-center py-12 text-gray-600 dark:text-gray-300">
                        No upcoming events found.
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayed.map((event) => {
                            const dateObj = event?.date ? new Date(event.date) : null;
                            const mainDate = dateObj && !isNaN(dateObj.getTime())
                                ? dateObj.toLocaleString(undefined, {
                                    weekday: "short",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })
                                : event.date || "TBD";

                            return (
                                <motion.div
                                    variants={container(.3)}
                                    initial="hidden"
                                    whileInView={'show'}
                                    key={event._id || event.id}
                                    className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                                >
                                    {event.thumbnail ? (
                                        <img src={event.thumbnail} alt={event.title} className="w-full h-56 object-cover" />
                                    ) : (
                                        <div className="w-full h-56 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                                            No image
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>

                                        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 gap-3">
                                            <CalendarIcon className="w-4 h-4" /> {mainDate}
                                        </div>

                                        <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400 gap-3">
                                            <MapPin className="w-4 h-4" /> {event.location}
                                        </div>

                                        <div className="mt-3 inline-block px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-800/40 text-indigo-600 dark:text-indigo-300 rounded-full">
                                            {event.eventType}
                                        </div>

                                        <div className="flex my-5">
                                            <Link
                                                to={`/events/${event._id}`}
                                                className="text-center w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-lg font-medium transition"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEvents;
