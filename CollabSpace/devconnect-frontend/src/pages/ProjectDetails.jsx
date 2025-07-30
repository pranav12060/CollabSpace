import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [comment, setComment] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    API.get('/projects').then(res => {
      const p = res.data.find(proj => proj._id === id);
      setProject(p);
    });
    API.get(`/feedback/${id}`).then(res => setFeedback(res.data));
  }, [id]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (!comment) return;
    await API.post('/feedback', { projectId: id, comment });
    setComment('');
    const updated = await API.get(`/feedback/${id}`);
    setFeedback(updated.data);
  };

  if (!project) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="mt-2">{project.description}</p>
      {project.link && <a href={project.link} className="text-blue-500 underline" target="_blank">Project Link</a>}
      <p className="text-sm text-gray-500 mt-2">By {project.userId?.name}</p>

      <hr className="my-4" />
      <h3 className="text-xl font-semibold mb-2">Feedback</h3>

      <div className="space-y-2">
        {feedback.map(f => (
          <div key={f._id} className="bg-gray-100 p-2 rounded">
            <p className="font-semibold">{f.userId?.name}</p>
            <p>{f.comment}</p>
          </div>
        ))}
      </div>

      {user && (
        <form onSubmit={submitComment} className="mt-4 flex gap-2">
          <input value={comment} onChange={e => setComment(e.target.value)} className="flex-1 border p-2 rounded" placeholder="Leave feedback..." />
          <button className="bg-blue-500 text-white px-4 rounded">Send</button>
        </form>
      )}
    </div>
  );
}
