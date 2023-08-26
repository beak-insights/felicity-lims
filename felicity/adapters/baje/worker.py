import logging

from domain.job.ports.service import IJobService
from domain.job.conf import JobCategories, JobActions

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class JobWorker:
    def __init__(self, job_service: IJobService):
        self.job_service = job_service

    async def run_jobs_if_exists(self):

        jobs = await self.job_service.fetch_sorted()

        logging.info(f"There are {len(jobs)} Jobs pending running.")

        if not jobs:
            return

        job_dispatch_table = {}
        # job_dispatch_table = {
        #     JobCategories.WORKSHEET: {
        #         JobActions.WS_ASSIGN: populate_worksheet_plate,
        #         JobActions.WS_MANUAL_ASSIGN: populate_worksheet_plate_manually,
        #     },
        #     JobCategories.REPORT: {
        #         JobActions.GENERATE_REPORT: generate_report,
        #     },
        #     JobCategories.IMPRESS: {
        #         JobActions.IMPRESS_REPORT: impress_results,
        #     },
        #     JobCategories.RESULT: {
        #         JobActions.RESULT_SUBMIT: submit_results,
        #         JobActions.RESULT_VERIFY: verify_results,
        #     },
        #     JobCategories.SHIPMENT: {
        #         JobActions.SH_MANUAL_ASSIGN: populate_shipment_manually,
        #         JobActions.SH_DISPATCH: dispatch_shipment,
        #         JobActions.SH_RECEIVE: shipment_receive,
        #         JobActions.SHIPPED_REPORT: return_shipped_report,
        #         JobActions.DIAGNOSTIC_REPORT: process_shipped_report,
        #     },
        # }

        for job in jobs:
            action_function = job_dispatch_table.get(job.category, {}).get(
                job.action, self.unknown_action
            )
            # logging.warning(f"Running Task: {job.action}")
            await action_function(job.uid)

    @staticmethod
    async def unknown_action( action: str):
        logging.warning(f"Unknown job action: {action}")
