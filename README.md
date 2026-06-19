# Stukkateur Firmenwebsite

Website für eine Stukkateur-Firma mit Fokus auf Stellenausschreibungen.

## Ziel (Phase 1)

Interessenten können offene Stellen einsehen und sehen, wie sie ihre Bewerbungsunterlagen einschicken können (E-Mail / Telefon). Kein Formular, kein Upload.

---

## Tech Stack

| Layer | Technologie |
|---|---|
| Backend | Python + FastAPI |
| Frontend | React + Vite + Tailwind CSS |
| Datenbank | Neon (PostgreSQL) + SQLModel |
| Hosting | Render (2 Services: Backend + Frontend) |

---

## Ordnerstruktur

```
hiring_website/
├── backend/
│   ├── app/
│   │   ├── main.py         ← FastAPI App-Einstiegspunkt
│   │   ├── db.py           ← Datenbankverbindung
│   │   ├── auth.py         ← JWT Login-Logik
│   │   ├── models.py       ← Datenbank-Tabellen (SQLModel)
│   │   └── routers/
│   │       ├── jobs.py     ← öffentliche Stellen-Endpunkte
│   │       └── admin.py    ← geschützte Admin-Endpunkte
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── lib/
    ├── package.json
    └── .env
```

---

## Datenbank (2 Tabellen)

**jobs**
- id, title, description, requirements
- location, employment_type
- contact_email, contact_phone
- is_active, created_at

**admin_users**
- id, email, password_hash

---

## API Endpunkte

```
# Öffentlich
GET  /api/jobs          → alle aktiven Stellen
GET  /api/jobs/{id}     → eine Stelle

# Admin (JWT geschützt)
POST   /api/admin/login
POST   /api/admin/jobs
PUT    /api/admin/jobs/{id}
DELETE /api/admin/jobs/{id}
```

---

## Seiten (Frontend)

| Route | Beschreibung |
|---|---|
| `/` | Landing Page |
| `/stellen` | Liste aller offenen Stellen |
| `/stellen/:id` | Stellendetail + Kontaktinfo zur Bewerbung |
| `/admin/login` | Admin Login |
| `/admin` | Stellen verwalten |

---

## Design

Minimalistisch, professionell, handwerklich.
Farben: Off-white Hintergrund, Anthrazit/Dunkelbraun, Sand/Beige Akzent.

---

## Umsetzungsplan

- [x] Planung & README
- [ ] Backend: Projektstruktur + FastAPI Grundgerüst
- [ ] Backend: Datenbankverbindung (Neon)
- [ ] Backend: Models (jobs, admin_users)
- [ ] Backend: Jobs Router (öffentlich)
- [ ] Backend: Admin Auth (JWT)
- [ ] Backend: Admin Router (geschützt)
- [ ] Frontend: React + Vite + Tailwind aufsetzen
- [ ] Frontend: Routing + Layout
- [ ] Frontend: Stellenliste + Detailseite
- [ ] Frontend: Admin Login + Dashboard
- [ ] Deploy auf Render
