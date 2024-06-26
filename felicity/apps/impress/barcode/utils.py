from felicity.apps.impress.barcode.engine import FelicityBarCoder
from felicity.apps.impress.barcode.schema import BarCode


async def impress_barcodes(bar_codes: list[BarCode]):
    return await FelicityBarCoder().generate(bar_codes)
