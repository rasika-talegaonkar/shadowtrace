from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.schemas.osint import TelegramOSINTCreate

from app.db.session import SessionLocal
from app.schemas.osint import TelegramOSINTCreate, InstagramOSINTCreate
from app.services.osint_service import (
    create_telegram_entry,
    create_instagram_entry
)

router = APIRouter(prefix="/osint", tags=["OSINT"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/telegram2")
def ingest_telegram(data: TelegramOSINTCreate, db: Session = Depends(get_db)):
    return create_telegram_entry(db, data)
@router.post("/telegram/bulk")
def bulk_ingest_telegram(
    records: List[TelegramOSINTCreate],
    db: Session = Depends(get_db)
):
    inserted = []
    for record in records:
        entry = create_telegram_entry(db, record)
        inserted.append(entry.id)
    return {"inserted_count": len(inserted)}

@router.post("/instagram2")
def ingest_instagram(data: InstagramOSINTCreate, db: Session = Depends(get_db)):
    return create_instagram_entry(db, data)
