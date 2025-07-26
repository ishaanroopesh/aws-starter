# AWS Starter Project

A Node.js backend application with Express.js and MongoDB for managing todo items. This project serves as a foundation for AWS deployment and includes a complete REST API for todo management.

## 🚀 Features

- **RESTful API**: Complete CRUD operations for todo management
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **Express.js Backend**: Fast and lightweight web framework
- **Environment Configuration**: Secure configuration management with dotenv
- **Error Handling**: Comprehensive error handling and validation
- **AWS Ready**: Designed for easy deployment to AWS services

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas connection)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd aws-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=9000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start at `http://localhost:9000`

## 📚 API Documentation

### Base URL
```
http://localhost:9000/api/todos
```

### Endpoints

#### 1. Get All Todos
- **GET** `/api/todos`
- **Description**: Retrieve all todo items
- **Response**: Array of todo objects

#### 2. Get Todo by ID
- **GET** `/api/todos/:id`
- **Description**: Retrieve a specific todo by ID
- **Parameters**: `id` (MongoDB ObjectId)
- **Response**: Single todo object

#### 3. Create Todo
- **POST** `/api/todos`
- **Description**: Create a new todo item
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "status": "pending",
    "dueDate": "2024-01-15T10:00:00.000Z"
  }
  ```

#### 4. Update Todo
- **PUT** `/api/todos/:id`
- **Description**: Update an existing todo
- **Parameters**: `id` (MongoDB ObjectId)
- **Headers**: `Content-Type: application/json`
- **Body**: Same as POST (all fields optional)

#### 5. Delete Todo
- **DELETE** `/api/todos/:id`
- **Description**: Delete a todo item
- **Parameters**: `id` (MongoDB ObjectId)

### Todo Model Schema

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `title` | String | Yes | - | Todo title |
| `description` | String | No | "" | Detailed description |
| `status` | String | No | "pending" | Status: "pending", "in-progress", "completed" |
| `dueDate` | Date | No | - | Due date for the todo |
| `createdAt` | Date | No | Current timestamp | Auto-generated creation date |

## 🧪 Testing with Postman

### Sample Request Bodies

#### Create Todo
```json
{
  "title": "Learn AWS Services",
  "description": "Study EC2, S3, Lambda, and other core AWS services",
  "status": "pending",
  "dueDate": "2024-01-10T14:00:00.000Z"
}
```

#### Update Todo
```json
{
  "title": "Updated AWS Learning",
  "description": "Advanced AWS concepts and best practices",
  "status": "in-progress",
  "dueDate": "2024-01-20T16:00:00.000Z"
}
```

### Response Format

#### Success Response
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Learn AWS Services",
    "description": "Study EC2, S3, Lambda, and other core AWS services",
    "status": "pending",
    "dueDate": "2024-01-10T14:00:00.000Z",
    "createdAt": "2024-01-01T10:00:00.000Z"
  }
}
```

#### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🏗️ Project Structure

```
aws-starter/
├── backend/
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── controllers/
│   │   └── todo.controller.js  # Todo CRUD operations
│   ├── models/
│   │   └── todo.model.js       # Todo schema definition
│   ├── routes/
│   │   └── todo.route.js       # API routes
│   └── server.js               # Express server setup
├── package.json
└── README.md
```

## 🚀 Deployment to AWS

This project is designed to be easily deployed to various AWS services:

### AWS EC2
1. Launch an EC2 instance
2. Install Node.js and MongoDB
3. Clone and deploy your application
4. Configure security groups for port 9000

### AWS Lambda + API Gateway
1. Package the application for Lambda
2. Create API Gateway endpoints
3. Configure environment variables
4. Set up MongoDB Atlas for database

### AWS ECS/Fargate
1. Create Dockerfile
2. Build and push Docker image
3. Deploy to ECS cluster
4. Configure load balancer

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server

### Environment Variables
- `PORT`: Server port (default: 9000)
- `MONGODB_URI`: MongoDB connection string

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues
2. Create a new issue with detailed description
3. Include error logs and steps to reproduce

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] File upload functionality
- [ ] Real-time notifications
- [ ] Advanced filtering and search
- [ ] API rate limiting
- [ ] Comprehensive logging
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline setup 