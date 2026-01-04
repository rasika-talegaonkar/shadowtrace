from pydantic import BaseModel
from datetime import datetime
from typing import Optional

# -------- Telegram --------
class TelegramOSINTCreate(BaseModel):
    channel_username: str

    title: Optional[str] = None
    members: Optional[int] = None

    discovered_at: Optional[datetime] = None
    discovered_via: Optional[str] = None

    message_id: Optional[str] = None
    message_date: Optional[datetime] = None

    text: Optional[str] = None
    views: Optional[int] = None
    has_media: Optional[bool] = None
    emoji_count: Optional[int] = None

# -------- Instagram --------
class InstagramOSINTCreate(BaseModel):
    username: str
    captions: Optional[str]
    hashtags: Optional[str]
    comments: Optional[str]
    ip_source: Optional[str]
    risk_scoring: Optional[int]
    profile_rank: Optional[int]
    max_automation: Optional[int]
