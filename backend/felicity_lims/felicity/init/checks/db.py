import logging

from tenacity import after_log, before_log, retry, stop_after_attempt, wait_fixed

from felicity.database.session import SessionLocal

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

max_tries = 60 * 5  # 5 minutes
wait_seconds = 1


@retry(
    stop=stop_after_attempt(max_tries),
    wait=wait_fixed(wait_seconds),
    before=before_log(logger, logging.INFO),
    after=after_log(logger, logging.WARN),
)
def check_db_conn_status() -> None:
    logger.info("Checking db status ...")
    try:
        db = SessionLocal()
        # Try to create session to check if DB is awake
        db.execute("SELECT 1")
        logger.info("db connection established. ")
    except Exception as e:
        logger.error(e)
        raise e
