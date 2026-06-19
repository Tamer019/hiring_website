import { useEffect, useState } from "react";
import { getJobs } from "../lib/api/jobs";
import JobCard from "../components/jobs/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Offene Stellen</h1>
      <p className="text-stone-500 text-sm mb-10">
        Wir freuen uns auf deine Bewerbung.
      </p>

      {loading && <p className="text-stone-400 text-sm">Lädt...</p>}

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {!loading && !error && jobs.length === 0 && (
        <p className="text-stone-400 text-sm">
          Aktuell sind keine Stellen ausgeschrieben.
        </p>
      )}

      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
