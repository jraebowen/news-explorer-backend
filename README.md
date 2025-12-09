# News Explorer: Back End

This is the backend server for the **News Explorer** web application. It handles all backend functionality, including API endpoints, authentication, and database operations. The server is deployed via a **Google Cloud Virtual Machine (VM)**.

---

## 🌐 Live Application

- **Backend domain:** [https://newsexplorer.wildsurf.net/](https://newsexplorer.wildsurf.net/)
- **Frontend repository:** [GitHub Frontend](https://github.com/jraebowen/news-explorer-frontend)
- **Recorded project overview:** TO BE UPDATED

---

## ⚡ Running the Project

From the backend project directory:

# Install dependencies

npm install

# Start the server

npm start

---

## Features

# Authentication & Authorization

- Secure password hashing using bcryptjs
- JWT-based authentication
- Tokens stored client-side and included in requests via Authorization header
- Protected routes that require a valid JWT

# Article Management

- Users can save and delete news articles
- Each saved article is associated with the currently authenticated user
- Strict validation ensures safe data handling

# Routing & Validation

- Modular Express routing structure
- All request bodies, params, and URLs validated with celebrate / Joi
- Centralized error-handling middleware
- CORS configured to allow requests from the deployed frontend

# Database (MongoDB + Mongoose)

- Mongoose models for Users and Articles
- Schema-level validation and built-in constraints

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Celebrate / Joi (validation)
- Nodemon for local dev
- Google Cloud VM for deployment (Ubuntu 24.04)

**Project Structure**

news-explorer-backend/
├─ controllers/ # Route logic
├─ models/ # Mongoose schemas and models
├─ routes/ # Express route definitions
├─ middlewares/ # Authentication & error handling middleware
├─ utils/ # Helper functions
├─ .env # Environment variables
├─ package.json # Dependencies and scripts
└─ app.js # Server entry point
