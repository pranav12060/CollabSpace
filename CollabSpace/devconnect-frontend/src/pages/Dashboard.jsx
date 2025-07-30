import { useEffect, useState } from 'react';
import API from '../api/axios';
import ProjectCard from '../components/ProjectCard';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  const fetchProjects = async () => {
    const res = await API.get('/projects');
    setProjects(res.data);
    setUsers([]);
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length === 0) {
      fetchProjects();
    } else {
      const res = await API.get(`/search?query=${value}`);
      setProjects(res.data.projects);
      setUsers(res.data.users);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">All Projects</h2>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search projects or users..."
          className="w-full max-w-xl p-3 border rounded-lg shadow focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Show matching users if any */}
      {users.length > 0 && (
        <div className="mb-8 bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Matching Users</h3>
          <div className="flex flex-wrap gap-3">
            {users.map(u => (
              <div key={u._id} className="bg-gray-100 px-3 py-2 rounded-lg shadow">
                <p className="font-medium">{u.name}</p>
                <p className="text-sm text-gray-500">{u.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-[1600px] mx-auto">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
