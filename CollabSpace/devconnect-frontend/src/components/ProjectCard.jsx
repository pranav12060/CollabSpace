import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project._id}`}
      className="group block bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 overflow-hidden"
    >
      {/* Card Header */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {project.description || 'No description available.'}
        </p>

        {/* Link Preview */}
        {project.link && (
          <div className="flex items-center text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md w-fit">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            View Project
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {project.userId?.name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                {project.userId?.name || 'Anonymous'}
              </p>
              <p className="text-xs text-gray-500">Project Author</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Created</p>
            <p className="text-xs text-gray-600 font-medium">
              {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'Recently'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
