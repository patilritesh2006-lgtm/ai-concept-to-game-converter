const API_URL = "https://ai-concept-to-game-converter-2.onrender.com/generate-game";

async function generateGame() {
  const fileInput = document.getElementById("file");
  const gradeInput = document.getElementById("grade");
  const output = document.getElementById("output");

  if (!fileInput.files.length || !gradeInput.value) {
    alert("Upload textbook image and enter grade");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("grade", gradeInput.value);

  output.innerText = "⏳ Generating game...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch {
    output.innerText = "❌ Error generating game";
  }
}
