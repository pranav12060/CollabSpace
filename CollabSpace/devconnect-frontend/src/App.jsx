import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './pages/Profile';

export default function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
        <Navbar />
        <div className="w-full px-0 pt-24 pb-12 text-left">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
