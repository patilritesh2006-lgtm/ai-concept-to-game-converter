from pydantic import BaseModel

class ConceptRequest(BaseModel):
    subject: str
    concept: str
    difficulty: str
