from fastapi import FastAPI
from schemas import ConceptRequest
from game_engine import build_game

app = FastAPI(title="AI Concept-to-Game Converter")

@app.post("/generate-game")
def generate_game(data: ConceptRequest):
    game = build_game(
        subject=data.subject,
        concept=data.concept,
        difficulty=data.difficulty
    )
    return {
        "status": "success",
        "generated_game": game
    }
import os

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 10000))
    )

