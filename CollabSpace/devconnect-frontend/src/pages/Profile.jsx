import { useContext, useState, useEffect } from 'react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import ProjectCard from '../components/ProjectCard';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ title: '', description: '', link: '' });
  const [myProjects, setMyProjects] = useState([]);

  const fetchMyProjects = async () => {
    const res = await API.get('/projects');
    const userProjects = res.data.filter(p => p.userId?._id === user.id);
    setMyProjects(userProjects);
  };

  useEffect(() => { fetchMyProjects(); }, []);

  const createProject = async (e) => {
    e.preventDefault();
    await API.post('/projects', form);
    setForm({ title: '', description: '', link: '' });
    fetchMyProjects();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Profile: {user?.name}</h2>

      <form onSubmit={createProject} className="bg-white shadow rounded-lg p-6 mb-8 space-y-3">
        <h3 className="text-xl font-semibold">Add New Project</h3>
        <input className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
          placeholder="Project Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <textarea className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
          placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
        <input className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
          placeholder="Link" value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} />
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Add Project</button>
      </form>

      <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {myProjects.map(p => <ProjectCard key={p._id} project={p} />)}
      </div>
    </div>
  );
}
