async function generateGame() {
  const subject = document.getElementById("subject").value;
  const concept = document.getElementById("concept").value;
  const difficulty = document.getElementById("difficulty").value;

  const response = await fetch(
    "https://ai-concept-to-game-converter-1.onrender.com/generate-game",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, concept, difficulty })
    }
  );

  const data = await response.json();
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}
