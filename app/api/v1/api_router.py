from fastapi import APIRouter
from app.api.v1.endpoints import osint, dashboard
from app.api.v1.endpoints import flagged_entities

api_router = APIRouter()
api_router.include_router(osint.router)
api_router.include_router(dashboard.router)
api_router.include_router(flagged_entities.router)

