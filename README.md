# 🔐 Securix — Real-Time Full Stack Chat Application

Securix is a full-stack real-time chat application that enables secure and seamless communication between users. It features authentication, persistent sessions, real-time messaging using WebSockets, media sharing, and theme customization. The project is built using the MERN stack and deployed on Render.

Live Demo: [https://securix-oxpj.onrender.com](https://securix-oxpj.onrender.com)
GitHub Repository: [https://github.com/Adinath-S-Pawar/Securix](https://github.com/Adinath-S-Pawar/Securix)

---

## 🚀 Features

* User authentication (Signup / Login / Logout)
* JWT-based secure session handling
* Persistent login across page refresh
* Real-time one-to-one messaging using Socket.IO
* Online user presence tracking
* Image sharing in chat
* Theme customization with multiple color schemes
* Responsive UI for desktop and mobile
* Secure password hashing
* Cloud-based image storage

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Zustand (State Management)
* React Router DOM
* Tailwind CSS + DaisyUI
* Axios
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Socket.IO
* Cloudinary (Image Upload)
* bcrypt.js

### Deployment

* Render (Full-stack hosting)
* MongoDB Atlas (Database)

---

## ⚙️ System Architecture

* React frontend handles UI and client-side routing
* Express backend provides REST APIs for authentication and messaging
* MongoDB stores user and message data
* Socket.IO enables real-time bidirectional communication
* Cloudinary manages image uploads
* Zustand manages global frontend state

---

## 📂 Project Structure

Securix
backend
└── src
  ├── controllers
  ├── models
  ├── routes
  ├── lib
  └── index.js

frontend
└── src
  ├── components
  ├── pages
  ├── store
  ├── utils
  └── App.jsx

README.md

---

## 🔄 Real-Time Messaging Flow

1. User logs in and establishes a Socket.IO connection
2. Server stores connected socket IDs
3. When a user sends a message

   * Message is saved in MongoDB
   * Server emits event to receiver’s socket
4. Receiver instantly receives the message without refreshing

---

## 🎨 Theme Management

* Theme preference stored in browser localStorage
* Zustand updates UI dynamically
* DaisyUI provides predefined color themes

---

## 🔐 Authentication Flow

1. User submits credentials
2. Backend validates and issues JWT in HTTP-only cookie
3. Middleware protects private routes
4. User session persists across refresh

---

## 📸 Image Sharing

* Images converted to Base64 on frontend
* Uploaded to Cloudinary
* Secure image URL stored in database
* Delivered in real-time through Socket.IO

---

## 📦 Installation & Setup

Clone the repository

git clone [https://github.com/Adinath-S-Pawar/Securix.git](https://github.com/Adinath-S-Pawar/Securix.git)
cd Securix

Install dependencies

npm install

Run the project

npm run dev

---

## 👤 Author

Adinath Pawar
GitHub: [https://github.com/Adinath-S-Pawar](https://github.com/Adinath-S-Pawar)

---

## ⭐ If you like this project, give it a star!
