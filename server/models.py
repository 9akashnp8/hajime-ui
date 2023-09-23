from pydantic import BaseModel

class GenerateElementPayload(BaseModel):
    prompt: str