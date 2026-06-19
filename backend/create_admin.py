from app.models.admin import AdminUser
from app.auth.hashing import hash_password
from app.db import engine
from sqlmodel import Session

EMAIL = "admin@info.de"
PASSWORD = "hiringadmin2026"

with Session(engine) as session:
    admin = AdminUser(email=EMAIL, password_hash=hash_password(PASSWORD))
    session.add(admin)
    session.commit()
    print(f"Admin erstellt: {EMAIL}")
