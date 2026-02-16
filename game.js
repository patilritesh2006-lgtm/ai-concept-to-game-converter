async function startGame() {
  const output = document.getElementById("output");
  output.innerText = "⏳ Generating game using AI...";

  try {
    const response = await fetch(
      "https://ai-concept-to-game-converter-1.onrender.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: "Physics",
          concept: "Newton’s Laws of Motion",
          difficulty: "High School"
        })
      }
    );

    const data = await response.json();

    output.innerText =
      "🎮 Game Type: " + data.generated_game.game_type +
      "\n🎯 Objective: " + data.generated_game.objective;
  } catch (err) {
    output.innerText = "❌ Backend error. Is the server running?";
  }
}
