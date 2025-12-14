# Smart Lead Automation System

A full‑stack MERN application that automatically generates, stores, and manages leads using scheduled cron jobs. Built as a practical project to demonstrate real‑world backend automation and frontend data handling.

---

## 🚀 Features

* Automated lead generation using **Cron Jobs**
* REST API built with **Node.js & Express**
* Data storage with **MongoDB & Mongoose**
* Frontend built using **React (Vite)**
* Add and view leads in real time
* CORS‑enabled secure frontend–backend communication

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express (v5)
* MongoDB
* Mongoose
* node-cron
* Axios

### Frontend

* React (Vite)
* Axios
* Basic CSS

---

## 📁 Project Structure

```
Smart Lead Automation System/
│
├── server/        # Backend (Express + MongoDB)
│   ├── routes/
│   ├── models/
│   ├── db.js
│   └── index.js
│
├── client/        # Frontend (React + Vite)
│   ├── src/
│   ├── services/
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/smart-lead-automation.git
cd smart-lead-automation
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

Backend runs on **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Frontend runs on **[http://localhost:5173](http://localhost:5173)**

---

## 🔄 API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /api/leads       | Get all leads      |
| POST   | /api/leads       | Add a single lead  |
| POST   | /api/leads/batch | Add leads in batch |

---

## ⏱️ Cron Job

* Automatically runs at scheduled intervals
* Fetches name‑based probability data
* Stores processed leads in MongoDB

---

## 🎯 Purpose of the Project

This project was built to:

* Practice **full‑stack MERN development**
* Understand **cron jobs & automation**
* Implement real backend–frontend integration
* Strengthen interview‑ready project portfolio

---

## 👤 Author

**Naval Sharma**
JavaScript | React | Node.js | MERN Stack

---

## 📌 Notes

* `.env` is ignored for security reasons
* This is a learning‑focused project

---

⭐ If you like this project, feel free to star the repo!
