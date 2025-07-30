import { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/signup', form);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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
          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded">Signup</button>
        </form>
      </div>
    </div>
  );
}
