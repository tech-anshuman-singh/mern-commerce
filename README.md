# MERN Commerce Setup Guide

This project is a full-stack ecommerce app built with Node.js, Express, MongoDB, and React.

## Prerequisites

Before running the project, make sure you have:

- Node.js v18 or v20
- npm
- MongoDB running locally or a MongoDB Atlas connection string
- Git

## 1) Install dependencies

From the project root, install the backend dependencies:

```bash
npm install
```

Install the frontend dependencies:

```bash
npm install --prefix frontend
```

## 2) Set up environment variables

Create a root `.env` file if it does not already exist.

You can use the example file as a template:

```bash
copy backend\config\config.env.example .env
```

Then update the values in `.env`:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/flipkart
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=5
NODE_ENV=development
```

For optional features like payments, email, and Cloudinary, fill in the keys shown in the example file.

## 3) Start MongoDB

Make sure MongoDB is running before starting the server.

If you are using a local MongoDB instance, it usually starts on:

```bash
mongodb://127.0.0.1:27017
```

## 4) Run the backend server

From the project root:

```bash
npm run server
```

This starts the Express API on:

```text
http://localhost:4000
```

If you want to run it directly with Node:

```bash
node server.js
```

## 5) Run the frontend app

Open a second terminal and start the React frontend:

```bash
npm run frontend
```

Or directly:

```bash
npm start --prefix frontend
```

The frontend usually runs on:

```text
http://localhost:3000
```

## 6) Run both together

To start both backend and frontend at the same time:

```bash
npm run dev
```

This uses the project scripts to launch the server and React app together.

## 7) Seed the database (optional)

If the project includes sample data, you can seed the database with:

```bash
npm run seed
```

To destroy seeded data:

```bash
npm run seed:destroy
```

## 8) Production build

To create a production build of the frontend:

```bash
npm run build --prefix frontend
```

The backend is already set up to serve the frontend build when `NODE_ENV=production`.

## Common issues

- MongoDB connection error: check `MONGO_URI` and ensure MongoDB is running.
- Port already in use: stop the process using the port or change `PORT` in `.env`.
- Frontend API requests fail: ensure the backend is running on port `4000`.
- Missing dependencies: run `npm install` and `npm install --prefix frontend` again.

## Project structure

```text
mern-commerce/
├── backend/
├── frontend/
├── .env
├── package.json
├── server.js
├── server.cmd
├── frontend.cmd
├── README.md
└── ...
```

## Default app URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

If you want, I can also create a more polished README with screenshots, feature overview, and deployment steps.
