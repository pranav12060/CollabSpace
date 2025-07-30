import { useState, useContext } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    login(res.data.user, res.data.token);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
