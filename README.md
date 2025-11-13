# 🌿 Event Management Platform (MERN + Firebase)

A modern, responsive **Full-Stack Event Management Web Application** built using **React**, **Tailwind CSS**, **DaisyUI**, **Express**, **MongoDB**, and **Firebase Authentication**.  

Users can explore upcoming events, view event details, create events, and log in using email/password or Google Sign-In.  
Includes **Dark/Light theme**, smooth transitions, and a professional UI.

---

## 🌐 Live Demo

🔗 **Live Site:** [https://social-development-4825c.web.app]
⚙️ **Backend API:** [https://future-box-server.vercel.app/]



---

## 🚀 Features

### 🌍 Frontend
- Built with **React + Vite** for blazing-fast performance
- **Responsive**, clean, and professional UI using TailwindCSS + DaisyUI
- **Dark/Light mode toggle** with localStorage persistence
- **Smooth transitions** using Framer Motion
- **404 Page**, **Loading Spinner**, **About**, and **Contact** pages
- Organized folder structure and reusable components
- For Animation Framer Motion

### 🧾 Event Functionalities
- Users can **create, view, and explore** events  
- Event includes:
  - Title  
  - Description  
  - Type (Cleanup / Plantation / Donation / etc.)  
  - Thumbnail image URL  
  - Location  
  - Future event date only (validated via `react-datepicker`)  
- Upcoming Events list with dynamic details page  
- Creator’s email automatically added to event data

### 🔐 Authentication (Firebase)
- **Sign Up**, **Login**, and **Logout** using Firebase Authentication  
- **Google Sign-In** available  
- Protected routes for authenticated users (Event creation, etc.)

### ⚙️ Backend (Express + MongoDB)
- RESTful API built using **Express.js**  
- CRUD operations for event management  
- Validates event date (future only)
- Easy deployment-ready structure (for Render, Railway, etc.)

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js (Vite) |
| Styling | Tailwind CSS + DaisyUI |
| Animations | Framer Motion |
| Icons | Lucide React |
| Auth | Firebase Authentication |
| Routing | React Router DOM |
| Backend | Express.js |
| Database | MongoDB + Mongoose |
| Date Picker | react-datepicker |
| State | React Hooks |

---
