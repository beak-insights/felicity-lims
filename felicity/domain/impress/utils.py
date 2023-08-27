from datetime import datetime


def impress_marshaller(obj):
    exclude = [
        "auth",
        "preference",
        "groups",
        "right",
        "left",
        "level",
        "tree_id",
        "parent_id",
        "parent",
    ]
    if not hasattr(obj, "__dict__"):
        if obj is None:
            return ""
        if isinstance(obj, datetime):
            return obj.strftime("%Y-%m-%d %H:%M:%S")
        if hasattr(obj, "__str__"):
            return obj.__str__()
        return obj

    result = {}
    for key, val in obj.__dict__.items():
        if key.startswith("_") or key in exclude:
            continue
        element = []
        if isinstance(val, list):
            for item in val:
                element.append(impress_marshaller(item))
        else:
            element = impress_marshaller(val)
        result[key] = element
    return result
