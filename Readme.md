# 🚀 SyncSpace

<div align="center">


### 💬 A Modern Team Collaboration Platform

Build, communicate, collaborate, and connect with your team in real-time.

🌐 **Live Demo:** https://syncspace-frontend-tau.vercel.app/

</div>

---

## 📖 Overview

**SyncSpace** is a full-stack team collaboration platform, built using the **MERN Stack**. It provides real-time messaging, workspace collaboration, secure authentication, and HD video calling to help teams communicate efficiently.

The application integrates modern technologies like **Clerk** for authentication, **Stream Chat** for messaging, **Stream Video SDK** for meetings, **MongoDB** for data storage, and **Inngest** for background event processing.

---

## ✨ Features

### 🔐 Authentication
- Secure Sign Up & Login
- Clerk Authentication
- Protected Routes
- User Profiles

### 👥 Workspace Management
- Create Workspaces
- Join Workspaces
- Manage Members

### 💬 Real-Time Messaging
- Public Channels
- Direct Messages
- Instant Messaging
- Message History
- Emoji Reactions

### 📹 Video & Audio Calling
- One-to-One Calls
- Group Meetings
- HD Video
- Screen Sharing (if enabled)

### 🎨 Modern UI
- Responsive Design
- Clean User Interface
- Fast Navigation
- Mobile Friendly

### ⚡ Performance
- React Query Data Fetching
- Optimized API Calls
- Background Event Processing using Inngest

### 🛡 Monitoring
- Error Tracking with Sentry

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| React 19 | Frontend Framework |
| React Router v7 | Routing |
| Tailwind CSS v4 | Styling |
| Axios | API Calls |
| React Query | Data Fetching |
| Clerk | Authentication |
| Stream Chat React SDK | Chat UI |
| Stream Video SDK | Video Calling |
| React Hot Toast | Notifications |
| Lucide React | Icons |
| Sentry | Error Monitoring |

---

## Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express.js | Backend Framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| Clerk | Authentication |
| Stream Chat API | Chat Backend |
| Inngest | Background Jobs |
| dotenv | Environment Variables |
| CORS | API Security |
| Sentry | Error Monitoring |

---

# 🏗 Project Architecture

```text
               React + Tailwind CSS
                       │
         React Query + Axios + Clerk
                       │
             REST API Requests
                       │
                Express.js Server
                       │
      ┌────────────────┴─────────────────┐
      │                                  │
 MongoDB Atlas                    Stream APIs
      │                       Chat + Video Calls
      │
   Inngest Background Jobs
```

---

# 📂 Folder Structure

```bash
SyncSpace/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── providers/
│   │   ├── services/
│   │   ├── lib/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/soyebahmed5/syncspace.git
```

```bash
cd SyncSpace
```

---

## Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGODB_URI=

CLERK_SECRET_KEY=

STREAM_API_KEY=

STREAM_API_SECRET=

SENTRY_DSN=
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_CLERK_PUBLISHABLE_KEY=

VITE_STREAM_API_KEY=

VITE_API_URL=http://localhost:5000
```

Run Frontend

```bash
npm run dev
```

---

# 🌍 Live Demo

👉 **https://syncspace-frontend-tau.vercel.app/**

---

# 📸 Screenshots

### Home Page

![Home Page](/frontend/public/home.png)

### Chat Page

![Chat Page](/frontend/public/chat.png)

### Channel Page

![Channel Page](/frontend/public/channel.png)

### Video Call Page

![Video Call Page](/frontend/public/videoCall.png)


---

# 🔥 Future Enhancements

- Voice Notes
- File Sharing
- Message Search
- Threaded Conversations
- Read Receipts
- Typing Indicators
- Notifications
- AI Chat Assistant
- Calendar Integration
- Workspace Roles
- Message Pinning
- Dark Mode
- End-to-End Encryption

---

# 📦 Deployment

Frontend

- Vercel

Backend

- Vercel

Database

- MongoDB Atlas

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Developer

**Soyeb Ahmed**

Full Stack Developer | MERN Stack | AI Enthusiast

---

<div align="center">

### ⭐ If you like this project, don't forget to give it a Star!

Made  using MERN Stack

</div>