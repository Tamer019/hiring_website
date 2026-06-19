from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.db import get_session
from app.models.job import Job

router = APIRouter(prefix="/api/jobs", tags=["jobs"])


@router.get("/", response_model=list[Job])
def get_jobs(session: Session = Depends(get_session)):
    jobs = session.exec(select(Job).where(Job.is_active == True)).all()
    return jobs


@router.get("/{job_id}", response_model=Job)
def get_job(job_id: int, session: Session = Depends(get_session)):
    job = session.get(Job, job_id)
    if not job or not job.is_active:
        raise HTTPException(status_code=404, detail="Stelle nicht gefunden")
    return job
