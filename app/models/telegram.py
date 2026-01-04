import uuid
from sqlalchemy import Column, String, Integer, Boolean, DateTime, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from app.db.base import Base

class TelegramOSINT(Base):
    __tablename__ = "telegram_osint"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    channel_username = Column(String(255), index=True)
    title = Column(Text)
    members = Column(Integer)

    discovered_at = Column(DateTime(timezone=True))
    discovered_via = Column(String(255))

    message_id = Column(String(100))
    message_date = Column(DateTime(timezone=True))
    text = Column(Text)

    views = Column(Integer)
    has_media = Column(Boolean)
    emoji_count = Column(Integer)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
