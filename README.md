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

## Technologies and Techniques

- Node.js
  - Configured the server environment and managed startup on a dedicated port
  - Handled HTTP requests and responses using Node core modules
- Express.js
  - Implemented routing for different endpoints
  - Used middleware for request parsing, error handling, and logging
  - Created modular route handlers for cleaner architecture
- Mongoose + MongoDB
  - Designed schemas and models to define data structure
  - Connected Node.js to MongoDB using Mongoose for seamless data operations
  - Leveraged built-in validation and schema methods for data integrity
- Authentication & Authorization
  - Implemented secure password hashing using **bcryptjs**
  - Used **jsonwebtoken (JWT)** for authentication and token-based session handling
  - Created protected routes that require valid tokens for access
  - Stored user information securely in the token payload to verify identity across requests
- Error Handling
  - Implemented centralized error-handling middleware to standardize server responses
  - Used custom error classes to return meaningful HTTP status codes (e.g., 400 for bad requests, 404 for not found, 500 for server errors)
  - Ensured error messages were user-friendly for the client while keeping detailed logs for developers

**Project Structure**

news-explorer-backend/
├─ controllers/ # Route logic
├─ models/ # Mongoose schemas and models
├─ routes/ # Express route definitions
├─ middlewares/ # Authentication & error handling middleware
├─ utils/ # Helper functions
├─ .env # Environment variables
├─ package.json # Dependencies and scripts
└─ index.js # Server entry point
