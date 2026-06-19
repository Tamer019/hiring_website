import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getJob } from "../lib/api/jobs";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJob(id)
      .then(setJob)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="max-w-5xl mx-auto px-6 py-16 text-stone-400 text-sm">Lädt...</p>;
  if (error) return <p className="max-w-5xl mx-auto px-6 py-16 text-red-500 text-sm">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Zurück-Link */}
      <Link to="/stellen" className="text-stone-400 text-sm hover:text-stone-600 transition-colors">
        ← Alle Stellen
      </Link>

      {/* Kopfbereich */}
      <div className="mt-8 mb-10">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h1 className="text-3xl font-bold text-stone-900">{job.title}</h1>
          <span className="text-xs text-stone-500 border border-stone-200 px-3 py-1 mt-1">
            {job.employment_type}
          </span>
        </div>
        <p className="text-stone-500 text-sm mt-2">{job.location}</p>
      </div>

      <div className="border-t border-stone-200" />

      {/* Beschreibung */}
      <div className="py-10">
        <h2 className="text-stone-900 font-semibold mb-4">Über die Stelle</h2>
        <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{job.description}</p>
      </div>

      {/* Anforderungen */}
      {job.requirements && (
        <>
          <div className="border-t border-stone-200" />
          <div className="py-10">
            <h2 className="text-stone-900 font-semibold mb-4">Das bringst du mit</h2>
            <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{job.requirements}</p>
          </div>
        </>
      )}

      <div className="border-t border-stone-200" />

      {/* Bewerbung */}
      <div className="py-10 bg-stone-100 px-8 mt-4">
        <h2 className="text-stone-900 font-semibold mb-2">Jetzt bewerben</h2>
        <p className="text-stone-500 text-sm mb-6">
          Schick uns deine Bewerbungsunterlagen (Anschreiben + Lebenslauf) direkt zu:
        </p>
        <div className="flex flex-col gap-3">
          {job.contact_email && (
            <a
              href={`mailto:${job.contact_email}`}
              className="inline-flex items-center gap-2 text-amber-800 font-medium text-sm hover:underline"
            >
              ✉ {job.contact_email}
            </a>
          )}
          {job.contact_phone && (
            <a
              href={`tel:${job.contact_phone}`}
              className="inline-flex items-center gap-2 text-amber-800 font-medium text-sm hover:underline"
            >
              ✆ {job.contact_phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
