# News Explorer: Back End

This is the backend server for the **News Explorer** web application. It handles all backend functionality, including API endpoints, authentication, and database operations. The server is deployed via a **Google Cloud Virtual Machine (VM)**.

---

## Live Application

- **Backend domain:** [https://newsexplorer.wildsurf.net/](https://newsexplorer.wildsurf.net/)
- **Frontend repository:** [GitHub Frontend](https://github.com/jraebowen/news-explorer-frontend)
- **Recorded project overview:** https://www.loom.com/share/521bbbc9e1c34b69bafaf5b92e37ab0d

---

## Features

### Authentication & Authorization

- Secure password hashing using bcryptjs
- JWT-based authentication
- Tokens stored client-side and included in requests via Authorization header
- Protected routes that require a valid JWT

### Article Management

- Users can save and delete news articles
- Each saved article is associated with the currently authenticated user
- Strict validation ensures safe data handling

### Routing & Validation

- Modular Express routing structure
- All request bodies, params, and URLs validated with celebrate / Joi
- Centralized error-handling middleware
- CORS configured to allow requests from the deployed frontend

### Database (MongoDB + Mongoose)

- Mongoose models for Users and Articles
- Schema-level validation and built-in constraints

### Validation & Error Handling

- All incoming data is validated using celebrate
- Invalid requests return structured JSON error responses
- Custom error classes used throughout the app
- Centralized error middleware prevents exposing internal details

### Frontend Integration Notes

- The deployed frontend calls the backend using absolute API URLs
- Authentication is fully synced using JWT stored in localStorage
- Protected routes in the frontend redirect to the homepage and then open the login modal
- CORS is configured to allow:
  - https://newsexplorer.wildsurf.net
  - your local dev environment

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Celebrate / Joi (validation)
- Nodemon for local dev
- Google Cloud VM for deployment (Ubuntu 24.04)

**Project Structure**

```
news-explorer-backend/
├── controllers/ # Business logic for user + article routes
├── models/ # Mongoose schemas (User, Article)
├── routes/ # API route definitions
├── middlewares/ # Auth, validation, error-handling middleware
├── utils/ # Helper functions (CORS, constants, regex)
├── errors/ # Request/error logs (if enabled)
├── .env # Environment variables
├── app.js # Express configuration
└── index.js # Server entry point
```

---

## Running the Project Locally

From the backend project directory:

### Install dependencies

npm install

### Run server in development mode

npm run dev

### Start production server

npm start

## Ensure the .env file includes:

PORT=3002
JWT_SECRET=your_secret
MONGO_URL=mongodb://localhost:27017/newsdb

## Deployment Notes (Google Cloud VM)

### Stop the server

pm2 stop all

### Update the Code

## From your local machine:

scp -r ./news-explorer-backend jraebowen@YOUR_SERVER_IP:/home/youruser/

### Reinstall Dependencies on the server, in your project folder

npm install

### Restart the Server

pm2 start index.js
pm2 status

### Check Logs

pm2 logs
