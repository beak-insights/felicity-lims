
class NoAuthentcationTokenError(Exception):
    def __init__(self, message="No authentication token"):
        self.message = message
        super().__init__(self.message)
        
