let score = 0;

function generateGame() {
  score = 0;
  document.getElementById("game").innerHTML = "<p>Loading game...</p>";

  const concept =
    document.getElementById("customConcept").value ||
    document.getElementById("concept").value;

  const grade = document.getElementById("difficulty").value;

  // 🔥 TEMP GAME LOGIC (HACKATHON SAFE)
  const questions = generateDummyQuestions(concept, grade);

  renderQuiz(questions);
}

function generateDummyQuestions(concept, grade) {
  return [
    {
      question: `What is a basic idea of ${concept}?`,
      options: ["Definition", "Story", "Song", "Poem"],
      answer: "Definition"
    },
    {
      question: `${concept} is mainly taught in which class?`,
      options: [`Class ${grade}`, "College", "None", "Unknown"],
      answer: `Class ${grade}`
    }
  ];
}

function renderQuiz(questions) {
  let html = `<h2>Quiz Game</h2>`;

  questions.forEach((q, index) => {
    html += `
      <div class="question">
        <h3>${index + 1}. ${q.question}</h3>
        ${q.options
          .map(
            opt =>
              `<button onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>`
          )
          .join("")}
      </div>
    `;
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
