import uuid
from sqlalchemy import Column, String, Integer, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy import DateTime
from app.db.base import Base

class InstagramOSINT(Base):
    __tablename__ = "instagram_osint"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    username = Column(String(255), index=True)
    captions = Column(Text)
    hashtags = Column(Text)
    comments = Column(Text)

    ip_source = Column(String(255))
    risk_scoring = Column(Integer)
    profile_rank = Column(Integer)
    max_automation = Column(Integer)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
