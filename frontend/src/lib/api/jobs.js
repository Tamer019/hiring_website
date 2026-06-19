const API_URL = import.meta.env.VITE_API_URL;

export async function getJobs() {
  const res = await fetch(`${API_URL}/api/jobs/`);
  if (!res.ok) throw new Error("Stellen konnten nicht geladen werden");
  return res.json();
}

export async function getJob(id) {
  const res = await fetch(`${API_URL}/api/jobs/${id}`);
  if (!res.ok) throw new Error("Stelle nicht gefunden");
  return res.json();
}
