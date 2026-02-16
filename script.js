async function generateGame() {
  const subject = document.getElementById("subject").value;
  const concept = document.getElementById("concept").value;
  const difficulty = document.getElementById("difficulty").value;

  const output = document.getElementById("output");
  output.textContent = "⏳ Generating game...";

  try {
    const response = await fetch(
      "https://ai-concept-to-game-converter-1.onrender.com/generate-game",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: subject,
          concept: concept,
          difficulty: difficulty
        })
      }
    );

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    output.textContent =
      "🎮 Game Type: " + data.generated_game.game_type + "\n\n" +
      "🎯 Objective: " + data.generated_game.objective + "\n\n" +
      "🧠 Rules:\n- " + data.generated_game.rules.join("\n- ") + "\n\n" +
      "🏆 Scoring:\nCorrect: " + data.generated_game.scoring_system.correct +
      ", Incorrect: " + data.generated_game.scoring_system.incorrect;

  } catch (error) {
    console.error(error);
   const game = data.generated_game;

output.innerHTML = `
  <h2>🎮 ${game.game_type}</h2>
  <p><strong>🎯 Objective:</strong> ${game.objective}</p>

  <h3>🧠 Rules</h3>
  <ul>
    ${game.rules.map(rule => `<li>${rule}</li>`).join("")}
  </ul>

  <h3>🏆 Scoring System</h3>
  <p>✅ Correct Answer: <b>${game.scoring_system.correct}</b></p>
  <p>❌ Incorrect Answer: <b>${game.scoring_system.incorrect}</b></p>
`;

  }
}
