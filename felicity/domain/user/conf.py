from enum import StrEnum, auto


class UserType(StrEnum):
    CLIENT_CONTACT = auto()
    LABORATORY_CONTACT = auto()


class Themes(StrEnum):
    DARK = auto()
    LIGHT = auto()
