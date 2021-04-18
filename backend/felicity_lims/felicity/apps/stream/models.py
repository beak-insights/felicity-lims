

# Data Feeds/groups for stream targeting
class Feed:
    uid: str
    name: str
    followers: list

    def get_feed(self, uid):
        """get feed"""

    def follow(self, feed_uid, user_uid):
        """Add a follower from the feed's followers"""

    def unfollow(self, feed_uid, user_uid):
        """Remove a follower from the feed's followers"""

    def following(self, feed_uid):
        """A list of followers of a feed"""


# Activity Stream
# Actor. The object that performed the activity.
# Verb. The verb phrase that identifies the action of the activity.
# Action Object. (Optional) The object linked to the action itself.
# Target. (Optional) The object to which the activity was performed.
# e.g Aurthur (actor) verified (verb) worksheet ws20-1222 (action object) 20 on felicity lims (target) minutes ago
# maybe target as feed
class Stream:
    uid: str
    actor_uid: str
    actor: str
    verb: str
    action_uid: str
    action: str
    target_uid: str
    target: str

    # add_activity(actor_uid=1, verb="", action_uid=56, target=feed_uid/group_uid)
    def add_activity(self, activity: dict):
        """A activity stream"""

    def remove_activity(self, activity_uid):
        """remove activity stream"""

    def seers(self, activity_uid):
        """list of users who have seen the stream"""

    def not_seers(self, activity_uid):
        """list of users who have not seen the stream"""

    def for_seer(self, seer_uid, seen=False):
        """Streams for user: seen or unseen"""
