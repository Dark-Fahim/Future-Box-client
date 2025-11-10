import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import {
  Search,
  Plus,
  Download,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  Tag,
} from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function EditEventModal({ event, onClose, onSave }) {
  const makeInitial = (ev) => ({
    ...ev,
    
    date: ev && ev.date ? new Date(ev.date).toISOString() : "",
  });

  const [formData, setFormData] = useState(makeInitial(event));

  useEffect(() => {
    setFormData(makeInitial(event));
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  
  const handleDateChange = (date) => {
    setFormData((p) => ({ ...p, date: date ? date.toISOString() : "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = {
      ...formData,
      
      date: formData.date ? new Date(formData.date).toISOString() : formData.date,
    };
    const { _id, title, date, location, thumbnail, description, eventType } = normalized;
    if (!title || !date || !location || !thumbnail || !description || !eventType) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
      return;
    }
    onSave(normalized);
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-auto">
      <div
        className="min-h-[100vh] flex items-start sm:items-center justify-center p-4 pt-12 sm:pt-0"
        aria-modal="true"
        role="dialog"
      >
        <div className="bg-white dark:bg-[#0f1724] rounded-xl shadow-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Edit Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Title</label>
              <input
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <div className="relative flex flex-col w-full">
              <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Date</label>

              <DatePicker
                selected={formData.date ? new Date(formData.date) : null}
                onChange={handleDateChange}
                minDate={new Date()}
                showTimeSelect
                timeIntervals={15}
                dateFormat="Pp"
                placeholderText="Select Event Date & Time"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                            bg-white dark:bg-[#0f1724] text-gray-900 dark:text-gray-100
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Location</label>
              <input
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Thumbnail</label>
              <input
                name="thumbnail"
                value={formData.thumbnail || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Description</label>

              <textarea
                placeholder="Event Description"
                value={formData.description || ""}
                onChange={handleChange}
                rows={4}
                name="description"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
            bg-white dark:bg-[#0f1724] text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:bg-[#0f1724] dark:text-gray-100"
              >
                <option>Cleanup</option>
                <option>Plantation</option>
                <option>Donation</option>
                <option>Workshop</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}






function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("grid");
  const { user } = useAuth();


  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (ev) => {
    setSelectedEvent(ev);
    setIsModalOpen(true);
  };


  useEffect(() => {
    const email = user?.email
    axios
      .get(`http://localhost:5000/manage-events?email=${encodeURIComponent(email)}`)
      .then((res) => {
        setEvents(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to load events:", err);

      });
  }, [user]);


  const handleUpdate = (updatedEvent) => {
    const { _id, title, date, location, thumbnail, description, eventType } = updatedEvent

    setEvents((prev) => prev.map((e) => (e._id === updatedEvent._id ? { ...e, ...updatedEvent } : e)));
    setIsModalOpen(false);
    setSelectedEvent(null);
    const updated = {
      title,
      date,
      location,
      thumbnail,
      description,
      eventType
    }

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.patch(`http://localhost:5000/manage-events/${_id}`, updated, {
          })
            .then(data => {
              console.log('after delete', data);
              if (data.data.modifiedCount) {
                Swal.fire({
                  title: "Updated!",
                  text: "Your Event Has Been Updated.",
                  icon: "success"
                });
                const remaining = events.filter(ev => ev._id !== id)
                setEvents(remaining)
              }
            })

        }
      });


    } catch (err) {
      console.error("Failed to save update to server:", err);

    }
  };

  const filtered = events.filter((e) => {
    const q = query.trim().toLowerCase();
    if (filter !== "All" && e.eventType !== filter) return false;
    if (!q) return true;
    return (
      (e.title || "").toLowerCase().includes(q) ||
      (e.location || "").toLowerCase().includes(q) ||
      (e.eventType || "").toLowerCase().includes(q)
    );
  });

  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/events/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log('after delete', data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Event Has Been deleted.",
                icon: "success"
              });
              const remaining = events.filter(ev => ev._id !== id)
              setEvents(remaining)
            }
          })

      }
    });


  }

  return (
    <div className="min-h-screen  bg-gray-50 dark:bg-[#0b1020] transition-colors duration-500 px-4 sm:px-6 lg:px-8 py-10 pt-20">
      <div className="max-w-7xl mx-auto">

        <header className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Manage Events
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Overview of your created and joined events — monitor, edit or export.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 lg:mt-0">
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
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm"
                aria-label="Create new event"
              >
                <Plus className="w-4 h-4" />
                New
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-200"
                aria-label="Export events"
              >
                <Download className="w-4 h-4" />
                Export
              </button>

              <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setView("grid")}
                  className={`px-3 py-2 text-sm ${view === "grid" ? "bg-gray-100 dark:bg-[#0b1a2b]" : "bg-white dark:bg-[#071026]"}`}
                  aria-pressed={view === "grid"}
                  aria-label="Grid view"
                >
                  Grid
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`px-3 py-2 text-sm ${view === "list" ? "bg-gray-100 dark:bg-[#0b1a2b]" : "bg-white dark:bg-[#071026]"}`}
                  aria-pressed={view === "list"}
                  aria-label="List view"
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </header>


        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-500 dark:text-gray-300">Total Events</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{events.length}</div>
          </div>

          <div className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-500 dark:text-gray-300">Active</div>
            <div className="text-2xl font-semibold text-green-600 dark:text-green-300">{events.filter(s => s.status === 'Active').length}</div>
          </div>

          <div className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-500 dark:text-gray-300">Upcoming</div>
            <div className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300">{events.filter(s => s.status === 'Upcoming').length}</div>
          </div>
        </section>


        <main>
          {view === "grid" ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filtered.map((ev) => (
                <article
                  key={ev._id}
                  className="flex flex-col h-full bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >

                  <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden flex-shrink-0">
                    <img src={ev.thumbnail} alt={ev.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{ev.title}</h3>

                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">{ev.eventType} • {ev.location}</div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-3">
                        <Calendar className="w-4 h-4" />
                        <span className="whitespace-nowrap">{new Date(ev.date).toLocaleDateString()}</span>
                        <MapPin className="w-4 h-4" />
                        <span className="truncate max-w-[9rem]">{ev.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#071826]" aria-label={`View ${ev.title}`}>
                          <Eye className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                        </button>
                        <button
                          onClick={() => handleEdit(ev)}
                          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#071826]"
                          aria-label={`Edit ${ev.title}`}
                        >
                          <Edit className="w-4 h-4 text-indigo-600" />
                        </button>

                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <button onClick={() => setView("list")} className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300">
                        Manage
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (

            <div className="bg-white dark:bg-[#071026] border border-gray-200 dark:border-gray-700 rounded-xl overflow-auto">
              <div className="min-w-full">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-[#071022] sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Event</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Location</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Attendees</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#0b1220] divide-y divide-gray-100 dark:divide-gray-800">
                    {filtered.map((ev) => (
                      <tr key={ev._id} className="hover:bg-gray-50 dark:hover:bg-[#071826]">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img src={ev.thumbnail} alt={ev.title} className="w-12 h-12 object-cover rounded-md flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="font-medium text-gray-900 dark:text-gray-100 truncate">{ev.title}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{ev.eventType}</div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 dark:text-white py-3 text-sm">{new Date(ev.date).toLocaleString()}</td>
                        <td className="px-4 dark:text-white py-3 text-sm max-w-[12rem] truncate">{ev.location}</td>
                        <td className="px-4 dark:text-white py-3 text-sm">{ev.attendees || 0}</td>
                        <td className="px-4 dark:text-white py-3 text-sm"></td>
                        <td className="px-4 py-3 text-right text-sm">
                          <div className="inline-flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(ev)}
                              className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm flex items-center gap-2"
                            >
                              <Edit className="w-4 h-4" /> Edit
                            </button>
                            <button onClick={() => handleDelete(ev._id)} className="px-3 py-1 bg-red-600 text-white rounded-md text-sm">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>


      {isModalOpen && selectedEvent && (
        <EditEventModal
          event={selectedEvent}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEvent(null);
          }}
          onSave={handleUpdate}

        />
      )}
    </div>
  );
}



export default ManageEvents