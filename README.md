
**Task_Cargofirst** is a full-stack **Job & Task Management Platform** built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It allows users to securely manage jobs/tasks by creating, viewing, and deleting tasks. The platform includes user authentication, a responsive UI, and protected routes using JWT.

---

## 🚀 Features

- **User Authentication**
  - Register & login securely
  - Password hashing with bcrypt
  - JWT-based authentication
  - Protected routes for authorized users only

- **Job Management**
  - Add new jobs/tasks with title, description, company name, and deadline
  - View all jobs created by the logged-in user
  - Delete and Update jobs 

- **Profile Management**
  - View  personal information
  - Display user email securely
  - Icons and a clean, responsive UI
 
- **Customer Analysis**
  - Use Recharts for React charting library(BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, and ResponsiveContainer to build visualizations) 
  - Use dummy data for Data visualization
  - Include charts or visual data representations
    

- **Frontend**
  - Built with **React.js** 
  - Sidebar navigation
  - Sticky sidebar for easy navigation
  - Interactive forms with validation

- **Backend**
  - Built with **Node.js** and **Express.js**
  - MongoDB database using Mongoose
  - RESTful API endpoints
  - Middleware to protect routes

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | React.js, Axios, Lucide Icons |
| Backend    | Node.js, Express.js |
| Database   | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| Deployment | Render (Backend & Frontend) |

---
##  Install backend dependencies

- cd backend
- npm install

---
## Install frontend dependencies

- cd ../frontend
- npm install

---
## Create .env file in backend folder

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- PORT=5000

---

## Run the project locally

**Backend**
- cd backend
- npm run dev

**Frontend**
- cd frontend
- npm start



