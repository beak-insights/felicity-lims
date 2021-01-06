from sqlalchemy import Column, String, Integer

from felicity.database.base_class import DBModel
from . import schemas, conf


class Job(DBModel):
    action = Column(String)
    category = Column(String)
    priority = Column(Integer)
    job_id = Column(Integer)
    status = Column(String)
    reason = Column(String)
    
    
    def increase_priority(self):
        if self.priority < conf.priorities.HIGH:
            self.priority += 1
            self.save()
    
    def decrease_priority(self):
        if self.priority > conf.priorities.NORMAL:
            self.priority -= 1
            self.save()
    
    @classmethod
    def fetch_sorted(cls):
        exclude =[conf.states.FINISHED, conf.states.FAILED]
        jobs = Job.where(status__notin=exclude).sort('-priority').all()
        _jobs = Job.smart_query(
            filters = {
                'status__ne': conf.states.FINISHED,
                'status__ne': conf.states.FAILED,
            },
            sort_attrs = ['-priority']
        )
        return jobs

    @classmethod
    def create(cls, obj_in: schemas.JobCreate) -> schemas.Job:
        data = cls._import(obj_in)
        return super().create(**data)

    def update(self, obj_in: schemas.JobUpdate) -> schemas.Job:
        data = self._import(obj_in)
        return super().update(**data)