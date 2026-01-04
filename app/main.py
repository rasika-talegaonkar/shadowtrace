from fastapi import FastAPI
from app.api.v1.api_router import api_router
from app.db.session import engine
from app.db.base import Base
from fastapi.middleware.cors import CORSMiddleware

# Import models so tables are registered
from app.models.telegram import TelegramOSINT
from app.models.instagram import InstagramOSINT

app = FastAPI(title="ShadowTrace OSINT Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite / React
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)

app.include_router(api_router)
