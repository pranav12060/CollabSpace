import { useContext, useState, useEffect } from 'react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import ProjectCard from '../components/ProjectCard';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ title: '', description: '', link: '' });
  const [bioForm, setBioForm] = useState({ bio: '' });
  const [myProjects, setMyProjects] = useState([]);
  const [isEditingBio, setIsEditingBio] = useState(false);

  const fetchMyProjects = async () => {
    const res = await API.get('/projects');
    const userProjects = res.data.filter(p => p.userId?._id === user.id);
    setMyProjects(userProjects);
  };

  useEffect(() => { 
    fetchMyProjects(); 
    setBioForm({ bio: user?.bio || '' });
  }, [user]);

  const createProject = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    await API.post('/projects', form);
    setForm({ title: '', description: '', link: '' });
    fetchMyProjects();
  };

  const updateBio = async (e) => {
    e.preventDefault();
    try {
      await API.put('/auth/profile', bioForm);
      setIsEditingBio(false);
      // Note: In a real app, you'd refresh user data here
    } catch (error) {
      console.error('Error updating bio:', error);
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {user.name?.charAt(0)?.toUpperCase()}
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
              <p className="text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                {user.email}
              </p>
            </div>
            
            {/* Bio Section */}
            <div>
              {isEditingBio ? (
                <form onSubmit={updateBio} className="space-y-3">
                  <textarea
                    value={bioForm.bio}
                    onChange={(e) => setBioForm({ bio: e.target.value })}
                    placeholder="Tell us about yourself..."
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingBio(false)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 italic">
                      {user.bio || bioForm.bio || 'No bio added yet. Click edit to add one!'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditingBio(true)}
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium ml-4"
                  >
                    Edit Bio
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add New Project */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Project
        </h2>
        
        <form onSubmit={createProject} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Project Title *</label>
              <input
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                placeholder="Enter project title"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Project Link</label>
              <input
                type="url"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                placeholder="https://github.com/username/project"
                value={form.link}
                onChange={e => setForm({ ...form, link: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
              placeholder="Describe your project..."
              rows={4}
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </div>
          
          <button 
            type="submit"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Add Project
          </button>
        </form>
      </div>

      {/* My Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-between">
          <span className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14-4v3m0 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14 0H5" />
            </svg>
            My Projects ({myProjects.length})
          </span>
        </h2>
        
        {myProjects.length === 0 ? (
          <div className="text-center py-12 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14-4v3m0 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14 0H5" />
            </svg>
            <p className="text-gray-500 text-lg">No projects yet</p>
            <p className="text-gray-400">Create your first project above!</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {myProjects.map(p => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
