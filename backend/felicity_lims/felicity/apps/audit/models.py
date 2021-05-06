from sqlalchemy import Column, Integer, String, UnicodeText

from felicity.apps import DBModel


def _current_user_id_or_none():
    try:
        return 1  # current_user.id
    except Exception:
        return None


class AuditLog(DBModel):
    """Model an audit log of user actions"""
    user_id = Column(Integer, doc="The ID of the user who made the change")
    target_type = Column(String(100), nullable=False, doc="The table name of the altered object")
    target_id = Column(Integer, doc="The ID of the altered object")
    action = Column(Integer, doc="Create (1), update (2), or delete (3)")
    state_before = Column(UnicodeText, doc="Stores a JSON string representation of a dict containing the altered "
                                           "column names and original values")
    state_after = Column(UnicodeText, doc="Stores a JSON string representation of a dict containing the altered "
                                          "column names and new values")

    def __init__(self, target_type, target_id, action, state_before, state_after):
        self.user_id = _current_user_id_or_none()  # get it from state_before or state_after
        self.target_type = target_type
        self.target_id = target_id
        self.action = action
        self.state_before = state_before
        self.state_after = state_after

    def __repr__(self):
        return '<AuditLog %r: %r -> %r>' % (self.user_id, self.target_type, self.action)

    def save(self, connection):
        connection.execute(
            self.__table__.insert(),
            user_id=self.user_id,
            target_type=self.target_type,
            target_id=self.target_id,
            action=self.action,
            state_before=self.state_before,
            state_after=self.state_after
        )
