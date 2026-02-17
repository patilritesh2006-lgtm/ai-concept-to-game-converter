from pydantic import BaseModel

class GameRequest(BaseModel):
    grade: int


