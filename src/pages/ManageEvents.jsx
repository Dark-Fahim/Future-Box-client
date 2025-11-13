/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import {
  Search,
  Plus,
  Download,
  Edit,
  Trash2,
} from "lucide-react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router"; 

const container = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});
// const container = (delay) => ({
//   hidden: { opacity: 0, x: -100 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
// });
// const container = (delay) => ({
//   hidden: { opacity: 0, x: 100 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
// });

function ManageEvents() {
  const [events, setEvents] = useState([]); 
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("grid");
  const { user } = useAuth();
  const secureAxios = useAxiosSecure();

  useEffect(() => {
    let cancelled = false;
    const email = user?.email;
    if (!email || !secureAxios) {
      setLoading(false);
      return;
    }

    setLoading(true);
    secureAxios
      .get(`/manage-events?email=${encodeURIComponent(email)}`)
      .then((res) => {
        if (cancelled) return;
        const payload = res?.data ?? res;
        let list = [];

        if (Array.isArray(payload)) {
          list = payload;
        } else if (Array.isArray(payload.data)) {
          list = payload.data;
        } else if (Array.isArray(payload.events)) {
          list = payload.events;
        } else if (Array.isArray(res?.data?.data)) {
          list = res.data.data;
        } else {
          
          list = Array.isArray(payload.items) ? payload.items : [];
        }

        setEvents(list);
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
        setEvents([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user?.email, secureAxios]);

  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0b1020]">
        <div className="text-center text-gray-700 dark:text-gray-200">Loading events...</div>
      </div>
    );
  }

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await secureAxios.delete(`/events/${id}`);
      const data = res.data;
      if (data?.deletedCount) {
        Swal.fire("Deleted!", "Your Event Has Been deleted.", "success");
        setEvents((prev) => prev.filter((e) => e._id !== id));
      } else {
        Swal.fire("Not deleted", "Could not delete the event.", "error");
      }
    } catch (err) {
      console.error("Failed to delete event:", err);
      Swal.fire("Error", "Failed to delete event on server.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b1020] transition-colors duration-500 px-4 sm:px-6 lg:px-8 py-10 pt-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <motion.h1 variants={container(.3)} initial="hidden" whileInView={"show"} className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Manage Events
            </motion.h1>
            <motion.p variants={container(.4)} initial="hidden" whileInView={"show"} className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Overview of your created and joined events — monitor, edit or export.
            </motion.p>
          </div>

          <motion.div variants={container(.5)} initial="hidden" whileInView={"show"} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 lg:mt-0">
            <label className="relative w-full sm:w-auto">
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
            </label>

            <div className="flex items-center gap-2">
              <select aria-label="Filter events by type" value={''} className="bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-100">
                <option>All</option>
                <option>Cleanup</option>
                <option>Plantation</option>
                <option>Donation</option>
                <option>Workshop</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Link to={'/create-event'} type="button" className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm" aria-label="Create new event">
                <Plus className="w-4 h-4" />
                New
              </Link>

              <button type="button" className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-200" aria-label="Export events">
                <Download className="w-4 h-4" />
                Export
              </button>

              
            </div>
          </motion.div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <motion.div variants={container(.4)} initial="hidden" whileInView={"show"} className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-500 dark:text-gray-300">Total Events</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{events.length}</div>
          </motion.div>

          <motion.div variants={container(.5)} initial="hidden" whileInView={"show"} className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-500 dark:text-gray-300">Active</div>
            <div className="text-2xl font-semibold text-green-600 dark:text-green-300">{events.length}</div>
          </motion.div>

          <motion.div variants={container(.5)} initial="hidden" whileInView={"show"} className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-500 dark:text-gray-300">Upcoming</div>
            <div className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300">{events.length}</div>
          </motion.div>
        </section>

        <main>
          <div className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl overflow-auto">
            <div className="min-w-full">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#071022] sticky top-0 z-10">
                  <tr>
                    <motion.th variants={container(.3)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Event</motion.th>
                    <motion.th variants={container(.4)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Date</motion.th>
                    <motion.th variants={container(.3)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Location</motion.th>
                    <motion.th variants={container(.4)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Attendees</motion.th>
                    <motion.th variants={container(.5)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Status</motion.th>
                    <motion.th variants={container(.6)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">Actions</motion.th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#0b1220] divide-y divide-gray-100 dark:divide-gray-800">
                  {events.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-300">
                        No events found. Try a different search or create a new event.
                      </td>
                    </tr>
                  )}

                  {events.map((ev) => (
                    <tr key={ev._id} className="hover:bg-gray-50 dark:hover:bg-[#071826]">
                      <motion.td variants={container(.3)} initial="hidden" whileInView={'show'} className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img src={ev.thumbnail} alt={ev.title} className="w-12 h-12 object-cover rounded-md flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 dark:text-gray-100 truncate">{ev.title}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{ev.eventType}</div>
                          </div>
                        </div>
                      </motion.td>

                      <motion.td variants={container(.4)} initial="hidden" whileInView={'show'} className="px-4 dark:text-white py-3 text-sm">
                        {ev.date ? new Date(ev.date).toLocaleString() : "-"}
                      </motion.td>
                      <motion.td variants={container(.3)} initial="hidden" whileInView={'show'} className="px-4 dark:text-white py-3 text-sm max-w-[12rem] truncate">{ev.location || "-"}</motion.td>
                      <motion.td variants={container(.4)} initial="hidden" whileInView={'show'} className="px-4 dark:text-white py-3 text-sm">{ev.attendees || 0}</motion.td>
                      <motion.td variants={container(.5)} initial="hidden" whileInView={'show'} className="px-4 dark:text-white py-3 text-sm"></motion.td>
                      <motion.td variants={container(.6)} initial="hidden" whileInView={'show'} className="px-4 py-3 text-right text-sm">
                        <div className="inline-flex items-center gap-2">
                          <Link to={`/manage-event/${ev._id}`} className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm flex items-center gap-2">
                            <Edit className="w-4 h-4" /> Edit
                          </Link>
                          <button onClick={() => handleDelete(ev._id)} className="px-3 py-1 bg-red-600 text-white rounded-md text-sm">Delete</button>
                        </div>
                      </motion.td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageEvents;
