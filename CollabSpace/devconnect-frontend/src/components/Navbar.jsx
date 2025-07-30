import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-12 py-4 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      <Link to="/" className="font-extrabold text-3xl tracking-wide text-white drop-shadow">CollabSpace</Link>
      <div className="flex gap-8 items-center">
        {user ? (
          <>
            <Link to="/profile" className="hover:text-blue-200 transition text-lg">Profile</Link>
            <button
              onClick={() => { logout(); navigate('/'); }}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition text-white font-semibold shadow"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-200 transition text-lg">Login</Link>
            <Link to="/signup" className="hover:text-blue-200 transition text-lg">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
