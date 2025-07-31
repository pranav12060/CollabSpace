import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 backdrop-blur-sm text-white shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-extrabold text-2xl md:text-3xl tracking-wide text-white hover:text-blue-200 transition-colors duration-200"
          >
            🚀 CollabSpace
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {user ? (
              <>
                <span className="text-blue-100 text-sm">Welcome, {user.name}!</span>
                <Link 
                  to="/profile" 
                  className="hover:text-blue-200 transition-colors duration-200 text-lg font-medium px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Profile
                </Link>
                <button
                  onClick={() => { logout(); navigate('/'); }}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all duration-200 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="hover:text-blue-200 transition-colors duration-200 text-lg font-medium px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-all duration-200 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            {user ? (
              <div className="space-y-2">
                <div className="px-3 py-2 text-blue-100 text-sm">Welcome, {user.name}!</div>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => { logout(); navigate('/'); setIsMenuOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-red-500/20 transition-colors duration-200 text-red-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
