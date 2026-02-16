from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from game_engine import build_game

app = FastAPI(title="AI Concept-to-Game Converter")

# ✅ ADD THIS BLOCK (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow GitHub Pages
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConceptRequest(BaseModel):
    subject: str
    concept: str
    difficulty: str

@app.post("/generate-game")
def generate_game(data: ConceptRequest):
    return {
        "generated_game": build_game(
            data.subject,
            data.concept,
            data.difficulty
        )
    }
