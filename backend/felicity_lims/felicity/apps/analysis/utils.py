from felicity.apps.analysis.models.analysis import SampleType
from felicity.apps.analysis.schemas import SampleTypeCreate


def get_qc_sample_type():
    st = SampleType.get(name="QC Sample")
    if not st:
        st_in = SampleTypeCreate(name="QC Sample", description="QC Sample", abbr="QCS")
        st = SampleType.create(st_in)
    return st
