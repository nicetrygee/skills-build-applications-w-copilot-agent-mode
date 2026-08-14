# OctoFit Tracker

A modern multi-tier application for activity tracking and team management with a competitive leaderboard.

## Architecture

- **Presentation Tier (Frontend)**: React 19 with Vite, running on port 5173
- **Logic Tier (Backend)**: Node.js + Express + TypeScript, running on port 8000
- **Data Tier**: MongoDB, running on port 27017

## Getting Started

### Prerequisites

- Node.js (LTS)
- MongoDB
- npm

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend API will be available at `http://localhost:8000`

### Database Setup

Ensure MongoDB is running:

```bash
# Check if MongoDB is running
ps aux | grep mongod

# Or start MongoDB if not running
mongodb-org start
```

Seed the database:

```bash
cd octofit-tracker/backend
npm run seed
```

## Features

- User authentication and profiles
- Activity logging and tracking
- Team creation and management
- Competitive leaderboard
- Personalized workout suggestions

## Technologies

### Frontend
- React 19
- Vite
- Bootstrap
- React Router DOM

### Backend
- Node.js
- Express
- TypeScript
- Mongoose

### Database
- MongoDB
