import time
import logging
from felicity.apps.analysis.models.results import AnalysisResult
from felicity.apps.job import models as job_models
from felicity.apps.job.conf import states as job_states
from felicity.apps.worksheet import models, conf
from felicity.apps.worksheet import utils

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def populate_worksheet_plate(job_uid: int):

    logger.info(f"starting job {job_uid} ....")
    job = job_models.Job.get(uid=job_uid)
    if not job:
        return

    if not job.status == job_states.PENDING:
        return

    job.change_status(new_status=job_states.RUNNING)
    ws_uid = job.job_id

    ws = models.WorkSheet.get(uid=ws_uid)
    if not ws:
        job.change_status(new_status=job_states.FAILED, change_reason=f"Failed to acquire WorkSheet {ws_uid}")
        logger.warning(f"Failed to acquire WorkSheet {ws_uid}")
        return

    if ws.state in [conf.worksheet_states.TO_BE_VERIFIED, conf.worksheet_states.VERIFIED]:
        job.change_status(new_status=job_states.FAILED, change_reason=f"WorkSheet {ws_uid} - is already processed")
        logger.warning(f"WorkSheet {ws_uid} - is already processed")
        return

    if ws.has_processed_samples():
        job.change_status(new_status=job_states.FAILED, change_reason=f"WorkSheet {ws_uid} - contains at least a processed sample")
        logger.warning(f"WorkSheet {ws_uid} - contains at least a processed sample")
        return

    logger.info(f"Filtering samples by template criteria ...")
    # get sample, filtered by analysis_service and Sample Type
    samples = AnalysisResult.smart_query(
        filters={
            'assigned__exact': False,
            # 'profiles__uid__in': [_p.uid for _p in ws.profiles],
            'analysis_uid__in': [_a.uid for _a in ws.analyses],
            # 'sampletype_uid__exact': ws.sampletype,
        },
        sort_attrs=['-sample___priority', '-created_at']
    ).all()
    available_samples = len(samples)
    logger.info(f"Done filtering: Got {available_samples} samples available ...")
    if available_samples == 0:
        job.change_status(new_status=job_states.FAILED, change_reason=f"There are no samples to assign to WorkSheet {ws_uid}")
        logger.warning(f"There are no samples to assign to WorkSheet {ws_uid}")
        return

    logger.info(f"Creating template factory instance ...")
    plate_values = ws.plate_values()
    factory = utils.WorkSheetPlater(**plate_values)
    samples = samples[:factory.number_of_samples]
    template = factory.create()

    reserved = [int(r) for r in list(factory.reserved_positions.keys())]

    logger.info(f"Filling template with samples ...")
    index = 0
    for k, v in list(template.items())[:available_samples]:
        if k not in reserved:
            template[k]['name'] = 'sample'
            template[k]['sample_uid'] = samples[index].uid
            index += 1

    logger.info(f"Assigning template with samples to worksheet")
    ws.set_plate(template)
    for s in samples:
        s.assign(ws.uid)

    time.sleep(1)

    ws.reset_assigned_count()
    if ws.assigned_count > 0:
        ws.change_state(state=conf.worksheet_states.OPEN)

    job.change_status(new_status=job_states.FINISHED)
    logger.info(f"Done !! Job {job_uid} was executed successfully :)")


def run_ws_jobs():
    pass
