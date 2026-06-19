from typing import Optional
from pydantic import BaseModel


class JobCreate(BaseModel):
    title: str
    description: str
    requirements: Optional[str] = None
    location: str
    employment_type: str
    contact_email: str
    contact_phone: Optional[str] = None


class JobUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    requirements: Optional[str] = None
    location: Optional[str] = None
    employment_type: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    is_active: Optional[bool] = None
