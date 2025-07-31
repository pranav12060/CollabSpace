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
    <div className="w-full space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Discover Amazing Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with talented developers and explore innovative projects from our community
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search projects or users..."
            className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Matching Users Section */}
      {users.length > 0 && (
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-8.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0z" />
            </svg>
            Matching Users
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {users.map(u => (
              <div key={u._id} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100 hover:shadow-md transition-all duration-200">
                <p className="font-semibold text-gray-800">{u.name}</p>
                <p className="text-sm text-gray-600">{u.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-4v3m0 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14 0H5" />
            </svg>
            Featured Projects ({projects.length})
          </h2>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14-4v3m0 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14 0H5" />
            </svg>
            <p className="text-gray-500 text-lg">No projects found</p>
            <p className="text-gray-400">Try adjusting your search or check back later!</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map(p => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
