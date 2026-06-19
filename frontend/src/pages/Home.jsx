import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-amber-800 text-sm font-medium tracking-widest uppercase mb-4">
          Stukkateur · Metzingen seit 1989
        </p>
        <h1 className="text-5xl font-bold text-stone-900 leading-tight mb-6">
          Handwerk das <br /> Bestand hat.
        </h1>
        <p className="text-stone-500 text-lg max-w-xl mb-10">
          Wir gestalten und restaurieren Fassaden, Innenräume und historische
          Zierstuckelemente — mit dem Anspruch, den jedes gute Handwerk verdient.
        </p>
        <Link
          to="/stellen"
          className="inline-block bg-stone-900 text-stone-50 px-6 py-3 text-sm font-medium hover:bg-stone-700 transition-colors"
        >
          Offene Stellen ansehen
        </Link>
      </section>

      {/* Trennlinie */}
      <div className="border-t border-stone-200" />

      {/* Was wir machen */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-stone-900 mb-12">Was wir machen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-stone-900 font-medium mb-2">Innenputz & Stuckarbeiten</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Von glattem Edelputz bis zu aufwendigen Stuckverzierungen — wir
              arbeiten präzise und materialgerecht.
            </p>
          </div>
          <div>
            <h3 className="text-stone-900 font-medium mb-2">Fassadengestaltung</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Wärmedämmverbundsysteme, Kratzputz, Silikatfarbe — wir beraten und
              führen aus, witterungsbeständig und langlebig.
            </p>
          </div>
          <div>
            <h3 className="text-stone-900 font-medium mb-2">Restaurierung & Denkmalpflege</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Historische Substanz erhalten, Schäden fachgerecht beheben — mit
              Erfahrung und Respekt vor dem Original.
            </p>
          </div>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="border-t border-stone-200" />

      {/* Wir stellen ein Teaser */}
      <section className="max-w-5xl mx-auto px-6 py-20 flex items-center justify-between gap-8 flex-wrap">
        <div>
          <h2 className="text-2xl font-semibold text-stone-900 mb-2">Wir suchen Verstärkung</h2>
          <p className="text-stone-500 text-sm">
            Gesellen, Meister oder motivierte Quereinsteiger — schau dir unsere
            offenen Stellen an.
          </p>
        </div>
        <Link
          to="/stellen"
          className="inline-block border border-stone-900 text-stone-900 px-6 py-3 text-sm font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors whitespace-nowrap"
        >
          Zu den Stellen
        </Link>
      </section>
    </div>
  );
}
