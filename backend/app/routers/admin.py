from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from app.auth.hashing import hash_password, verify_password
from app.auth.jwt import create_access_token
from app.db import get_session
from app.dependencies import get_current_admin
from app.models.admin import AdminUser
from app.models.job import Job
from app.schemas.admin import LoginRequest, TokenResponse
from app.schemas.job import JobCreate, JobUpdate

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.post("/login", response_model=TokenResponse)
def login(data: LoginRequest, session: Session = Depends(get_session)):
    admin = session.exec(select(AdminUser).where(AdminUser.email == data.email)).first()
    if not admin or not verify_password(data.password, admin.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Ungültige Anmeldedaten")
    token = create_access_token({"sub": str(admin.id)})
    return TokenResponse(access_token=token)


@router.post("/jobs", response_model=Job)
def create_job(
    data: JobCreate,
    session: Session = Depends(get_session),
    _: AdminUser = Depends(get_current_admin),
):
    job = Job(**data.model_dump())
    session.add(job)
    session.commit()
    session.refresh(job)
    return job


@router.put("/jobs/{job_id}", response_model=Job)
def update_job(
    job_id: int,
    data: JobUpdate,
    session: Session = Depends(get_session),
    _: AdminUser = Depends(get_current_admin),
):
    job = session.get(Job, job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Stelle nicht gefunden")
    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(job, key, value)
    session.add(job)
    session.commit()
    session.refresh(job)
    return job


@router.delete("/jobs/{job_id}")
def delete_job(
    job_id: int,
    session: Session = Depends(get_session),
    _: AdminUser = Depends(get_current_admin),
):
    job = session.get(Job, job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Stelle nicht gefunden")
    session.delete(job)
    session.commit()
    return {"ok": True}
