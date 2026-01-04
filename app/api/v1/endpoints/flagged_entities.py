from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from sqlalchemy import func
import csv
import io

from app.db.session import get_db
from app.models.telegram import TelegramOSINT

router = APIRouter()


# ==============================
# GET FLAGGED ENTITIES
# ==============================
@router.get("/flagged-entities")
def get_flagged_entities(db: Session = Depends(get_db)):

    subquery = (
        db.query(
            TelegramOSINT.channel_username.label("username"),
            func.max(TelegramOSINT.views).label("max_views"),
            func.max(TelegramOSINT.members).label("max_members"),
        )
        .filter(TelegramOSINT.channel_username.isnot(None))
        .group_by(TelegramOSINT.channel_username)
        .subquery()
    )

    results = (
        db.query(subquery)
        .filter(
            (subquery.c.max_views > 100) |
            (subquery.c.max_members >= 500)
        )
        .order_by(
            subquery.c.max_views.desc(),
            subquery.c.max_members.desc()
        )
        .limit(25)
        .all()
    )

    response = []

    for r in results:
        views = r.max_views or 0
        members = r.max_members or 0

        if views > 100 and members >= 500:
            risk = "HIGH"
        elif views > 100 or members >= 500:
            risk = "MEDIUM"
        else:
            continue

        response.append({
            "username": r.username,
            "platform": "Telegram",
            "risk": risk,
            "status": "Pending",
            "reason": "High engagement patterns and suspicious distribution activity"
        })

    return response


# ==============================
# EXPORT FLAGGED ENTITIES CSV
# ==============================
@router.get("/flagged-entities/export")
def export_flagged_entities(db: Session = Depends(get_db)):

    rows = db.query(TelegramOSINT).all()

    output = io.StringIO()
    writer = csv.writer(output)

    writer.writerow([
        "ID",
        "Username",
        "Platform",
        "Risk",
        "Status",
        "Reason"
    ])

    for r in rows:
        views = r.views or 0
        members = r.members or 0

        if views > 100 and members >= 500:
            risk = "HIGH"
        elif views > 100 or members >= 500:
            risk = "MEDIUM"
        else:
            continue

        writer.writerow([
            r.id,
            r.channel_username,
            "Telegram",
            risk,
            "Pending",
            "Automated OSINT risk threshold triggered"
        ])

    output.seek(0)

    return StreamingResponse(
        output,
        media_type="text/csv",
        headers={
            "Content-Disposition": "attachment; filename=flagged_entities.csv"
        }
    )
