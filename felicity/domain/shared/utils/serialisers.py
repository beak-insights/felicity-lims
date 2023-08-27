from datetime import datetime
from typing import Any

from pydantic import BaseModel


def marshal(model: Any, exclude: list[str] | None = None) -> dict:
    if isinstance(model, BaseModel):
        return model.model_dump(exclude_unset=True)
    elif isinstance(model, dict):
        return model

    if hasattr(model, "__dict__"):
        if exclude is None:
            exclude = []
        exclude.append("_sa_instance_state")

        return_data = {}
        for k, v in model.__dict__.items():
            if k not in exclude and not callable(v):
                if isinstance(v, datetime):
                    v = v.__str__()
                return_data[k] = v
        return return_data

    return model
