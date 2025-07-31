# 🚀 CollabSpace

**CollabSpace** is a modern full-stack developer collaboration platform where users can showcase their projects, connect with other developers, and exchange valuable feedback. Built with React, Node.js, Express, MongoDB, and styled with Tailwind CSS.

![CollabSpace Banner](https://via.placeholder.com/800x200/6366f1/ffffff?text=CollabSpace+-+Developer+Collaboration+Platform)

## ✨ Features

### 🔐 Authentication & User Management
- **Secure User Registration & Login** with JWT token-based authentication
- **Persistent Login Sessions** - stay logged in across browser sessions
- **User Profiles** with customizable bio and personal information
- **User Avatar System** with automatic initial-based avatars

### 📱 Project Management
- **Create & Showcase Projects** with title, description, and links
- **Project Discovery** - browse all community projects in a beautiful grid layout
- **Detailed Project Views** with author information and creation dates
- **Project Links** - direct access to GitHub repositories, live demos, etc.

### 💬 Community & Feedback
- **Comment System** - leave feedback and comments on any project
- **Real-time Feedback Display** with user attribution and timestamps
- **Community Search** - find users by name and projects by title
- **User Interaction** - connect with other developers through project feedback

### 🎨 Modern UI/UX
- **Fully Responsive Design** - works perfectly on desktop, tablet, and mobile
- **Glass Morphism Design** with backdrop blur effects
- **Gradient Themes** with modern color schemes
- **Smooth Animations** and hover effects
- **Loading States** and empty state handling
- **Mobile-First Navigation** with hamburger menu

### 🔍 Search & Discovery
- **Global Search** functionality for both users and projects
- **Real-time Search Results** with instant feedback
- **Smart Filtering** to help users find relevant content

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Axios** - HTTP client for API communication
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT (JSON Web Tokens)** - Secure authentication
- **bcrypt** - Password hashing and security
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** (for cloning the repository)

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/CollabSpace.git
cd CollabSpace
\`\`\`

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

\`\`\`bash
cd CollabSpace/devconnect-backend
npm install
\`\`\`

Create a \`.env\` file in the backend root directory:

\`\`\`env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/collabspace
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/collabspace

# JWT Secret (use a strong, random string)
JWT_SECRET=your-super-secret-jwt-key-here

# Server Port
PORT=5000
\`\`\`

Start the backend server:

\`\`\`bash
# Development mode with auto-restart
npm run dev

# OR production mode
npm start
\`\`\`

The backend server will start on \`http://localhost:5000\`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

\`\`\`bash
cd CollabSpace/devconnect-frontend
npm install
\`\`\`

Create a \`.env\` file in the frontend root directory:

\`\`\`env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
\`\`\`

Start the frontend development server:

\`\`\`bash
npm run dev
\`\`\`

The frontend application will start on \`http://localhost:5173\`

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally following the [official guide](https://docs.mongodb.com/manual/installation/)
2. Start MongoDB service
3. The application will automatically create the database and collections

#### Option B: MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and update the \`MONGODB_URI\` in your \`.env\` file
4. Whitelist your IP address in the Atlas dashboard

## 📱 Usage Guide

### Getting Started
1. **Sign Up**: Create a new account with your name, email, and password
2. **Login**: Access your account using your credentials
3. **Create Profile**: Add a bio to tell others about yourself

### Managing Projects
1. **Add Projects**: Navigate to your profile and use the "Add New Project" form
2. **Share Links**: Include GitHub repositories, live demos, or any relevant links
3. **View Projects**: Browse all community projects from the dashboard

### Community Interaction
1. **Search**: Use the search bar to find specific projects or users
2. **Give Feedback**: Click on any project to view details and leave comments
3. **Connect**: Discover other developers through their projects and feedback

## 🌟 Key Features Explained

### Responsive Design
- **Mobile-First**: Designed to work seamlessly on all device sizes
- **Adaptive Layouts**: Grid systems that adjust based on screen size
- **Touch-Friendly**: Optimized for touch interactions on mobile devices

### Authentication Flow
- **Secure Registration**: Passwords are hashed using bcrypt
- **JWT Tokens**: Stateless authentication with automatic token refresh
- **Protected Routes**: Certain features require authentication

### Project Showcase
- **Rich Project Cards**: Beautiful cards with hover effects and animations
- **Detailed Views**: Comprehensive project pages with all relevant information
- **Social Features**: Feedback and interaction capabilities

## 🤝 Contributing

We welcome contributions to CollabSpace! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Make your changes and commit: \`git commit -m 'Add amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

### Areas for Contribution
- 🐛 Bug fixes and improvements
- 🎨 UI/UX enhancements
- 📱 Mobile responsiveness improvements
- 🔍 Search functionality enhancements
- 📚 Documentation improvements
- ✨ New features and integrations

## 📝 API Documentation

### Authentication Endpoints
- \`POST /api/auth/signup\` - User registration
- \`POST /api/auth/login\` - User login
- \`PUT /api/auth/profile\` - Update user profile (protected)

### Project Endpoints
- \`GET /api/projects\` - Get all projects
- \`POST /api/projects\` - Create new project (protected)

### Feedback Endpoints
- \`GET /api/feedback/:projectId\` - Get project feedback
- \`POST /api/feedback\` - Add feedback (protected)

### Search Endpoints
- \`GET /api/search?query=term\` - Search users and projects

## 🔧 Environment Variables

### Backend (\`.env\`)
\`\`\`env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
\`\`\`

### Frontend (\`.env\`)
\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

## 🚨 Troubleshooting

### Common Issues

**Backend server won't start:**
- Check if MongoDB is running
- Verify environment variables in \`.env\` file
- Ensure port 5000 is not in use

**Frontend build errors:**
- Clear node_modules: \`rm -rf node_modules && npm install\`
- Check Node.js version (should be 16+)
- Verify environment variables

**Database connection issues:**
- Check MongoDB URI format
- Verify database permissions (for Atlas)
- Ensure network connectivity

**Authentication not working:**
- Verify JWT_SECRET is set
- Check token expiration settings
- Clear browser localStorage if needed

### Getting Help
- Check the [Issues](https://github.com/yourusername/CollabSpace/issues) page
- Create a new issue with detailed description
- Join our community discussions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing React framework
- **Tailwind CSS** for the beautiful utility-first CSS framework
- **MongoDB** for the flexible NoSQL database
- **Express.js** for the robust web framework
- **All Contributors** who help make this project better

---

## 🌟 Star the Project

If you find CollabSpace useful, please consider giving it a star ⭐ on GitHub!

---

**Built with ❤️ by the CollabSpace community**