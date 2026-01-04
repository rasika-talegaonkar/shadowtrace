from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

# ===============================
# PostgreSQL Configuration
# ===============================

POSTGRES_USER = "postgres"

# RAW password (can contain @, :, /, %, etc.)
RAW_POSTGRES_PASSWORD = "Rasika@1234"

# URL-encode safely (DO NOT hardcode %40)
POSTGRES_PASSWORD = quote_plus(RAW_POSTGRES_PASSWORD)

POSTGRES_HOST = "127.0.0.1"
POSTGRES_PORT = "5432"
POSTGRES_DB = "corps_osint_db"

# ===============================
# Database URL
# ===============================

DATABASE_URL = (
    f"postgresql+psycopg2://{POSTGRES_USER}:"
    f"{POSTGRES_PASSWORD}@"
    f"{POSTGRES_HOST}:"
    f"{POSTGRES_PORT}/"
    f"{POSTGRES_DB}"
)

# ===============================
# SQLAlchemy Engine & Session
# ===============================

engine = create_engine(
    DATABASE_URL,
    echo=True,          # SHOW SQL QUERIES (keep ON for debugging)
    pool_pre_ping=True # Auto-reconnect if connection drops
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# =========================
# FASTAPI DEPENDENCY
# =========================
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
