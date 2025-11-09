import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDynamicTitle from "../hooks/useDynamicTitle";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CreateEvent = () => {
  const axiosSecure = useAxiosSecure()
  useDynamicTitle('CreateEvent || EventSphere')
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [error, setError] = useState("");
  const {user} = useAuth()

  const eventTypes = ["Cleanup", "Plantation", "Donation", "Workshop", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !eventType || !thumbnail || !location || !date) {
      setError("Please fill all fields.");
      return;
    }

    const now = new Date();
    if (date < now) {
      setError("Event date must be in the future.");
      return;
    }

    const eventData = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      date: date.toISOString(),
      creatorEmail: user?.email || "anonymous@example.com",
    };
    console.log(eventData);
    console.log(axiosSecure);
    axiosSecure.post('/events', eventData)
    .then(data => {
      console.log("after post data", data);
    }).catch((err) => {
      console.log(err);
    })

    console.log("Event Created:", eventData);

    // setTitle("");
    // setDescription("");
    // setEventType("");
    // setThumbnail("");
    // setLocation("");
    // setDate(null);
    // setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-500 pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-500">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Create New Event
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
            bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
            bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
            bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          >
            <option value="">Select Event Type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          
          <input
            type="text"
            placeholder="Thumbnail Image URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
            bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          
          <input
            type="text"
            placeholder="Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
            bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          
          <div className="relative">
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              minDate={new Date()}
              showTimeSelect
              timeIntervals={15}
              dateFormat="Pp"
              placeholderText="Select Event Date & Time"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
              bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            />
          </div>

          
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
