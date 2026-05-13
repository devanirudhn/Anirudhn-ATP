# Full Stack Blog Application

A complete full-stack Blog Platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This application allows users to read articles, authors to publish content, and admins to manage the platform.

---

# Project Overview

The Blog Application is designed with role-based access control and modern authentication mechanisms.

The platform contains three main roles:

- USER
- AUTHOR
- ADMIN

Each role has different permissions and functionalities.

---

# Features

## Authentication
- User Registration
- Login & Logout
- JWT Authentication
- Cookie-Based Sessions
- Protected Routes

## User Features
- Read Articles
- View Author Profiles
- Responsive Reading Experience

## Author Features
- Publish Articles
- Edit Articles
- Disable/Delete Articles
- Manage Own Content

## Admin Features
- Manage Users
- Manage Authors
- Manage Articles
- Dashboard Analytics

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Zustand
- React Hook Form

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

# Architecture

```bash
project-root/
│
├── blog-app-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── blog-app-backend/
│   ├── APIs/
│   ├── models/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
└── README.md