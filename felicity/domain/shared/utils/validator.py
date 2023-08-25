import re


def is_valid_email(email):
    """Make a regular expression for validating an Email"""
    regex = "^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w+$"
    if re.search(regex, email):
        return True
    return False
