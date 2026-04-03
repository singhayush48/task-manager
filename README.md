# 🧠 Task Manager Backend API

A robust and scalable backend API for managing tasks, built using Node.js and Express. This project follows a clean architecture with separation of concerns using controllers, models, routes, and middleware.

---

## 🚀 Features

* 🔐 **Authentication & Authorization**

  * Secure user login & registration
  * JWT-based authentication
  * Protected routes

* 📋 **Task Management**

  * Create, update, delete tasks
  * Mark tasks as completed
  * Categorize tasks

* 🛡️ **Security**

  * Input validation using Joi
  * Secure cookie handling
  * Middleware-based protection

* 🗂️ **Clean Architecture**

  * Controllers for logic
  * Models for database
  * Routes for API endpoints
  * Middleware for reusable logic

* 🗄️ **Database Integration**

  * PostgreSQL database
  * Efficient data handling

---

## 🏗️ Project Structure

```
task_manager/
│
├── controllers/     # Business logic
├── models/          # Database models
├── routes/          # API routes
├── middlewares/     # Custom middleware (auth, validation)
├── config/          # DB and environment config
├── index.js         # Entry point
└── package.json
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/singhayush48/task_manager.git
```

2. Navigate to project folder:

```bash
cd task_manager
```

3. Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in root:

```
PORT=5000
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Server

```bash
npm start
```

OR (for development):

```bash
npm run dev
```

---

## 📡 API Endpoints (Example)

### 🔐 Auth Routes

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📋 Task Routes

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

---

## 🧩 Middleware Used

* Authentication Middleware (JWT verification)
* Authorization Middleware (role-based access)
* Validation Middleware (Joi)
* Error Handling Middleware

---

## 🔒 Security Practices

* Password hashing
* Token-based authentication
* Input validation
* Protected routes

---

## 📌 Future Improvements

* Pagination & filtering
* Rate limiting
* Caching
* Swagger API documentation
* Unit & integration testing

---

## 👨‍💻 Author

**Ayush Singh**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
