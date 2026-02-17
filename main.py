from fastapi import FastAPI, UploadFile, File, Form
from text_extractor import extract_text_from_pdf
from ai_analyzer import analyze_text
from game_generator import generate_game

app = FastAPI(title="AI Textbook to Game Generator")

@app.post("/generate-game")
async def generate_game_api(
    file: UploadFile = File(...),
    grade: int = Form(...)
):
    text = extract_text_from_pdf(file)
    analysis = analyze_text(text, grade)
    game = generate_game(analysis)
    return game

