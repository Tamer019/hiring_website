import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <Link
      to={`/stellen/${job.id}`}
      className="block border border-stone-200 bg-white p-6 hover:border-stone-400 transition-colors group"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-stone-900 font-semibold text-lg group-hover:text-amber-800 transition-colors">
            {job.title}
          </h2>
          <p className="text-stone-500 text-sm mt-1">{job.location}</p>
        </div>
        <span className="shrink-0 text-xs text-stone-500 border border-stone-200 px-3 py-1 mt-1">
          {job.employment_type}
        </span>
      </div>
      <p className="text-stone-500 text-sm mt-4 line-clamp-2">{job.description}</p>
      <p className="text-amber-800 text-sm font-medium mt-4">Stelle ansehen →</p>
    </Link>
  );
}
