from felicity.apps import worksheet
from felicity.apps.job import models as job_models
from felicity.apps.job.conf import states as job_states
from felicity.apps.analysis import models as an_models
from felicity.apps.worksheet import models
from felicity.apps.worksheet import utils


def populate_worksheet_plate(job_uid:int):
    job = job_models.Job.get(uid=job_uid)
    if not job:
        return
    job.update(status=job_states.RUNNING)
    # retrieve ws_uid
    ws_uid = job.job_id
     # fetch ws
    ws = models.WorkSheet.get(uid=ws_uid)
    if not ws:
        job.update(status=job_states.FAILED, reason=f"Failed to acquire WorkSheet {ws_uid}")
        return
    # get plate_template vals
    plate_values = ws.plate_values()
    # create a template
    factory = utils.WorkSheetPlater(**plate_values)
    template = factory.create()
    # get sample, filtered by analysis_service
    samples = an_models.Sample.smart_query(
        filters = {
            'assigned__eq': False,
            'profiles__uid__in': [_p.uid for _p in ws.profiles],
            'analyses__uid__in': [_a.uid for _a in ws.analysis],
        },
        sort_attrs = ['-priority']
    )
    # 
    samples = samples[:factory.number_of_samples]
    reserved = list(factory.reserved_positions.keys())
    index = 0
    for k, v in template.items():
        if not k in reserved:
            template[k]['name'] = 'sample'
            template[k]['sample_uid'] = samples[index].uid
            index += 1
            
    # assing ws plate to template
    ws.update(plate=template)
    job.update(status=job_states.FINISHED)
    