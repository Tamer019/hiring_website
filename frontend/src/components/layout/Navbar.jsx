import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-stone-900 font-semibold text-lg tracking-wide">
          IVAN GmbH
        </Link>
        <nav className="flex gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-stone-900 text-sm font-medium border-b border-stone-900 pb-0.5"
                : "text-stone-500 text-sm hover:text-stone-900 transition-colors"
            }
          >
            Start
          </NavLink>
          <NavLink
            to="/stellen"
            className={({ isActive }) =>
              isActive
                ? "text-stone-900 text-sm font-medium border-b border-stone-900 pb-0.5"
                : "text-stone-500 text-sm hover:text-stone-900 transition-colors"
            }
          >
            Stellen
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
