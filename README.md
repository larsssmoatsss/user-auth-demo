# User Authentication System

A full-stack authentication system built with Node.js, Express, React, and PostgreSQL. Features secure user registration, login with JWT tokens, and protected routes.

## Live Demo

- **Frontend**: [https://user-auth-demo-sooty.vercel.app](https://user-auth-demo-sooty.vercel.app)
- **Backend API**: [https://user-auth-demo.onrender.com](https://user-auth-demo.onrender.com)

## Features

- User registration with email validation
- Password hashing using bcrypt
- JWT-based authentication
- Protected dashboard route
- Client-side input validation (minimum password length, email format)
- Loading states and error handling
- Responsive design with CSS animations

## Tech Stack

**Frontend:**
- React
- React Router
- Axios for HTTP requests
- CSS3 with keyframe animations

**Backend:**
- Node.js
- Express.js
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt for password hashing

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: Supabase (PostgreSQL)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| GET | `/api/auth/profile` | Get user profile (requires authentication) |

## Running Locally

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your database credentials:
```
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Initialize the database:
```bash
node initDb.js
```

5. Start the server:
```bash
node server.js
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Security Features

- Passwords are hashed using bcrypt with salt rounds before storage
- JWT tokens for stateless authentication (24-hour expiration)
- Protected routes require valid authentication tokens
- SQL injection prevention through parameterized queries
- CORS configured to allow cross-origin requests
- SSL/TLS encryption for database connections

## Project Structure
```
auth-project/
├── server/                 # Backend API
│   ├── routes/
│   │   └── auth.js        # Authentication routes
│   ├── db.js              # Database connection
│   ├── server.js          # Express server setup
│   └── initDb.js          # Database initialization
├── client/                # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   └── App.js
│   └── public/
└── README.md
```

## Future Enhancements

- Password reset functionality via email
- Email verification on registration
- Refresh token implementation for extended sessions
- User profile editing capabilities
- Role-based access control (admin/user permissions)
- Two-factor authentication

## Author

Lars Moats
- GitHub: [@larsssmoatsss](https://github.com/larsssmoatsss)

## License

This project is open source and available under the MIT License.