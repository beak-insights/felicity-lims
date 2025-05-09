import re
from typing import Any, Union
from urllib.parse import urlsplit


def get_passed_args(inspection: Any) -> dict:
    """
    Retrieve user passed function arguments from the current frame from inspect

    :param inspection: current frame arguments
    :return: dict of arguments passed into function
    usage:
        import inspector
        inspector = inspect.getargvalues(inspect.currentframe())
        passed_args = get_passed_args(inspector)
    """
    _args = inspection.args
    _locals = inspection.locals

    kwargs = {}
    if "kwargs" in _locals.keys():
        kwargs = _locals.get("kwargs")
        del _locals["kwargs"]

    if "self" in _args:
        del _locals["self"]

    if "info" in _args:
        del _locals["info"]

    final = {**kwargs, **_locals}
    # [(arg,args.locals[arg]) for arg in args.args]
    return final


def has_value_or_is_truthy(val: Any) -> bool:  # noqa
    if isinstance(val, bool):
        return True

    if not val:
        return False

    if isinstance(val, str):
        if not val.strip():
            return False
    return True


def to_text(val: Any) -> str:  # noqa
    return str(val)


def get_from_nested(obj: dict, path: str) -> Union[str, int, float, Any]:
    """
    Traversed a json/dict object tree and returns the required value if exists
    :param obj: dict object to be traversed
    :param path: the paths to find the required value
    :return: Its return the required value
    """
    if not obj:
        return ""
    keys = path.split(".")
    key = keys.pop(0)
    value = obj.get(key)
    if len(keys) == 0:
        if isinstance(value, int) or isinstance(value, float):
            return value
        return value if value else ""
    else:
        return get_from_nested(value, ".".join(keys))


def delete_from_nested(obj: dict, path: str) -> dict | None:
    """
    Traverses a json/dict object tree and deletes the required value if exists
    :param obj: dict object to be traversed
    :param path: the paths to find the required value
    :return: None
    """

    if not obj:
        return None
    if not path:
        return obj

    keys = path.split(".")
    key = keys.pop(0)
    value = obj.get(key)
    if len(keys) == 0:
        if isinstance(value, list):
            for item in value:
                delete_from_nested(item, ".".join(keys))
        else:
            del obj[key]
    else:
        if isinstance(value, list):
            for item in value:
                delete_from_nested(item, ".".join(keys))
        else:
            delete_from_nested(value, ".".join(keys))
    return obj


def strtobool(val: str) -> bool:
    """Convert a string representation of truth to true (1) or false (0).
    True values are 'y', 'yes', 't', 'true', 'on', and '1'; false values
    are 'n', 'no', 'f', 'false', 'off', and '0'.  Raises ValueError if
    'val' is anything else.
    """
    val = val.lower()
    if val in ("y", "yes", "t", "true", "on", "1"):
        return True
    elif val in ("n", "no", "f", "false", "off", "0"):
        return False
    else:
        raise ValueError("invalid truth value %r" % (val,))


def clean_paths(obj: dict) -> dict | None:
    paths = [
        "profiles.analyses.profiles",
        "analyses.profiles.analyses",
        "analysis_results.analysis.profiles",
    ]
    for _path in paths:
        obj = delete_from_nested(obj, _path)
    return obj


def remove_circular_refs(ob: dict, _seen: set = None) -> dict:
    if _seen is None:
        _seen = set()

    if id(ob) in _seen:
        return None
    _seen.add(id(ob))

    res = ob

    if isinstance(ob, dict):
        res = {
            remove_circular_refs(key, _seen): remove_circular_refs(value, _seen)
            for key, value in ob.items()
        }

    elif isinstance(ob, (list, tuple, set, frozenset)):
        res = type(ob)(remove_circular_refs(v, _seen) for v in ob)

    _seen.remove(id(ob))
    return res


def get_client_ip(request):
    x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if x_forwarded_for:
        ip = x_forwarded_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR")
    return ip


def base_host(request, is_admin=False, is_space=False, is_app=False):
    """Utility function to return host / origin from the request"""
    # Calculate the base origin from request
    base_origin = str(
        request.META.get("HTTP_ORIGIN")
        or f"{urlsplit(request.META.get('HTTP_REFERER')).scheme}://{urlsplit(request.META.get('HTTP_REFERER')).netloc}"
        or f"""{"https" if request.is_secure() else "http"}://{request.get_host()}"""
    )
    return base_origin


def user_ip(request):
    return str(request.META.get("REMOTE_ADDR"))


def extract_template_variables(template_text: str) -> list[str]:
    """
    Extract variable names from template text.
    Variables are enclosed in curly braces: {variable_name}
    """
    pattern = r"\{([a-zA-Z0-9_\.]+)\}"
    matches = re.findall(pattern, template_text)
    return matches


