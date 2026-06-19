export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between text-stone-400 text-sm">
        <span>© {new Date().getFullYear()} Stuckwerk</span>
        <span>Alle Rechte vorbehalten</span>
      </div>
    </footer>
  );
}
