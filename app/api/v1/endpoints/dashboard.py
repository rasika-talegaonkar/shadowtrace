from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, distinct

from app.db.session import SessionLocal
from app.models.telegram import TelegramOSINT
from app.models.instagram import InstagramOSINT

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ------------------------------------------------
# DASHBOARD STATS
# ------------------------------------------------
@router.get("/stats")
def dashboard_stats(db: Session = Depends(get_db)):
    # CHANNELS MONITORED
    channels_monitored = (
        db.query(func.count(distinct(TelegramOSINT.channel_username)))
        .scalar()
    )

    # HIGH-RISK ENTITIES (TEMP HEURISTIC)
    # Definition:
    # - views > 100
    # - members >= 500
    high_risk_entities = (
        db.query(distinct(TelegramOSINT.channel_username))
        .filter(TelegramOSINT.views > 100)
        .filter(TelegramOSINT.members >= 500)
        .count()
    )

    return {
        "channels_monitored": channels_monitored or 0,
        "high_risk_entities": high_risk_entities or 0,
    }


# ------------------------------------------------
# ACTIVITY TRENDS
# ------------------------------------------------
@router.get("/activity-trends")
def activity_trends(db: Session = Depends(get_db)):
    results = (
        db.query(
            func.date(TelegramOSINT.message_date).label("date"),
            func.count(TelegramOSINT.id).label("count"),
        )
        .filter(TelegramOSINT.message_date.isnot(None))
        .group_by("date")
        .order_by("date")
        .all()
    )

    return [
        {"date": r.date.isoformat(), "count": r.count}
        for r in results
    ]


# ------------------------------------------------
# PLATFORM DISTRIBUTION
# ------------------------------------------------
# @router.get("/platform-distribution")
# def platform_distribution(db: Session = Depends(get_db)):
#     telegram_count = db.query(TelegramOSINT.id).count()

#     return [
#         {"platform": "Telegram", "count": telegram_count}
#     ]

@router.get("/platform-distribution")
def platform_distribution(db: Session = Depends(get_db)):
    telegram_count = db.query(func.count(TelegramOSINT.id)).scalar()
    instagram_count = db.query(func.count(InstagramOSINT.id)).scalar()

    return [
        {"platform": "Telegram", "count": telegram_count},
        {"platform": "Instagram", "count": instagram_count},
    ]
