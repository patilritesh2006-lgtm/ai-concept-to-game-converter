let score = 0;

function generateGame() {
  score = 0;
  document.getElementById("game").innerHTML = "Loading...";

  fetch("https://ai-concept-to-game-converter-1.onrender.com/generate-game", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      subject: document.getElementById("subject").value,
      concept: document.getElementById("concept").value,
      difficulty: document.getElementById("difficulty").value
    })
  })
  .then(res => res.json())
  .then(data => renderQuiz(data.generated_game.questions));
}

function renderQuiz(questions) {
  let html = "";
  questions.forEach((q, index) => {
    html += `<div class="question">
      <h3>${q.question}</h3>
      ${q.options.map(opt =>
        `<button onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>`
      ).join("")}
    </div>`;
  });

  html += `<h2>Score: <span id="score">0</span></h2>`;
  document.getElementById("game").innerHTML = html;
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score += 10;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }
  document.getElementById("score").innerText = score;
}
