import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const UpdateEventForm = () => {
    const secureAxios = useAxiosSecure();
    const event = useLoaderData()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        title: '',
        date: '',
        location: '',
        thumbnail: '',
        description: '',
        eventType: 'public'
    });

    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (event) {
            const {
                title = '',
                date = '',
                location = '',
                thumbnail = '',
                description = '',
                eventType = 'public'
            } = event;
            const normalizedDate = date ? (date.includes('T') ? date.split('T')[0] : date) : '';

            setForm({ title, date: normalizedDate, location, thumbnail, description, eventType });
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        if (!form.title.trim()) return 'Title is required';
        if (!form.date) return 'Date is required';
        if (!form.location.trim()) return 'Location is required';
        if (!form.description.trim()) return 'Description is required';
        return null;
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const error = validate();
        if (error) {
            Swal.fire({ icon: 'error', title: 'Validation error', text: error });
            return;
        }

        const { _id } = event || {};
        if (!_id) {
            Swal.fire({ icon: 'error', title: 'Missing event id', text: 'Cannot update an event without an id.' });
            return;
        }

        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
            });

            if (!result.isConfirmed) return;

            setSubmitting(true);
            const res = await secureAxios.patch(`/manage-events/${_id}`, { ...form });

            if (res?.data?.modifiedCount) {
                Swal.fire({ title: 'Updated!', text: 'Your Event Has Been Updated.', icon: 'success' });
                navigate("/manage-events")

            } else {
                Swal.fire({ title: 'No changes', text: 'No fields were modified on the server.', icon: 'info' });
            }
        } catch (err) {
            console.error('Failed to save update to server:', err);
            Swal.fire({ icon: 'error', title: 'Update failed', text: err?.message || 'Unknown error' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen mt-16 p-4 sm:p-8 bg-gray-50 dark:bg-[#121212] transition-colors duration-200">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100">Update Event</h1>
                    
                </div>

                <form onSubmit={handleUpdate} className="bg-white dark:bg-gray-900 dark:text-gray-400 rounded-2xl shadow p-6 sm:p-8 grid grid-cols-1 gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Title</span>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                className="rounded-md border px-3 py-2 bg-transparent outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300 dark:focus:ring-indigo-600"
                                placeholder="Event title"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Date</span>
                            <input
                                name="date"
                                type="date"
                                value={form.date}
                                onChange={handleChange}
                                className="rounded-md border px-3 py-2 bg-transparent outline-none"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Location</span>
                        <input
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="City, Venue, or address"
                            className="rounded-md border px-3 py-2 bg-transparent outline-none"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Thumbnail URL</span>
                        <input
                            name="thumbnail"
                            value={form.thumbnail}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="rounded-md border px-3 py-2 bg-transparent outline-none"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Description</span>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell users about the event..."
                            className="rounded-md border px-3 py-2 bg-transparent outline-none resize-none"
                        />
                    </label>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="eventType" value="public" checked={form.eventType === 'public'} onChange={handleChange} />
                                <span className="text-sm text-gray-700 dark:text-gray-200">Public</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="eventType" value="private" checked={form.eventType === 'private'} onChange={handleChange} />
                                <span className="text-sm text-gray-700 dark:text-gray-200">Private</span>
                            </label>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-60"
                            >
                                {submitting ? 'Updating...' : 'Update Event'}
                            </button>

                            <button
                                type="button"
                                onClick={() => setForm({ title: '', date: '', location: '', thumbnail: '', description: '', eventType: 'public' })}
                                className="px-4 py-2 rounded-lg border"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* responsive thumbnail preview */}
                    {form.thumbnail && (
                        <div className="mt-2">
                            <span className="text-sm text-gray-700 dark:text-gray-200 mb-1 block">Preview</span>
                            <img src={form.thumbnail} alt="thumbnail preview" className="w-full max-h-72 object-cover rounded-md border" />
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default UpdateEventForm;
