from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(title="AI Textbook to Game Generator")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate-game")
async def generate_game(
    file: UploadFile = File(...),
    grade: int = Form(...)
):
    content = await file.read()

    return {
        "generated_game": {
            "grade": grade,
            "game_type": "Interactive Quiz + Drag & Drop",
            "objective": "Learn concept from uploaded textbook",
            "rules": [
                "Answer correctly",
                "Match elements",
                "Earn points"
            ],
            "scoring": {
                "correct": 10,
                "wrong": -5
            }
        }
    }

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
