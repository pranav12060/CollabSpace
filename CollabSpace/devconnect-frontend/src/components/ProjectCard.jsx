import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project._id}`}
      className="w-full block p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-200 mb-4"
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-2">{project.title}</h3>
      <p className="text-base text-blue-800 mt-1 line-clamp-3">{project.description}</p>
      <p className="text-sm text-blue-600 mt-4 italic">By {project.userId?.name}</p>
    </Link>
  );
}
