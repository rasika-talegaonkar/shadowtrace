from sqlalchemy.orm import Session
from app.models.telegram import TelegramOSINT
from app.models.instagram import InstagramOSINT

def create_telegram_entry(db: Session, data):
    entry = TelegramOSINT(**data.dict())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


def create_instagram_entry(db: Session, data):
    entry = InstagramOSINT(**data.dict())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry
