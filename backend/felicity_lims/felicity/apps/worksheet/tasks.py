import time
import logging
from felicity.apps.analysis.models.results import AnalysisResult
from felicity.apps.job import models as job_models
from felicity.apps.job.conf import states as job_states
from felicity.apps.worksheet import models
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

    # job.change_status(new_status=job_states.RUNNING)
    # retrieve ws_uid
    ws_uid = job.job_id

    # fetch ws
    ws = models.WorkSheet.get(uid=ws_uid)
    if not ws:
        job.change_status(new_status=job_states.FAILED, change_reason=f"Failed to acquire WorkSheet {ws_uid}")
        logger.warning(f"Failed to acquire WorkSheet {ws_uid}")
        return

    logger.info(f"Creating template factory instance ...")
    # get plate_template values
    plate_values = ws.plate_values()
    # create a template
    factory = utils.WorkSheetPlater(**plate_values)
    template = factory.create()

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
    )
    #
    samples = samples[:factory.number_of_samples]
    logger.info(f"Done filtering {len(samples)} samples")
    reserved = [int(r) for r in list(factory.reserved_positions.keys())]

    logger.info(f"Filling template with samples ... {samples}")
    index = 0

    for k, v in template.items():
        if k not in reserved:
            template[k]['name'] = 'sample'
            template[k]['sample_uid'] = samples[index].uid
            index += 1

    logger.info(f"Assigning template with samples to worksheet")
    # assign ws plate to template
    ws.set_plate(template)
    for s in samples:
        s.assign(ws.uid)

    time.sleep(1)
    
    ws.reset_assigned_count()
    job.change_status(new_status=job_states.FINISHED)
    logger.info(f"Done !! Job {job_uid} was executed successfully :)")


def run_ws_jobs():
    pass
