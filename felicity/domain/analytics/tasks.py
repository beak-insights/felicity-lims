import logging

from apps.notification.utils import FelicityStreamer, ReportNotifier

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

report_notifier = ReportNotifier()
streamer = FelicityStreamer()
