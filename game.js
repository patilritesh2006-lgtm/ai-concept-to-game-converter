const API_URL = "https://ai-concept-to-game-converter-2.onrender.com/generate-game";

async function generateGame() {
  const fileInput = document.getElementById("file");
  const gradeInput = document.getElementById("grade");
  const output = document.getElementById("output");

  if (!fileInput.files.length || !gradeInput.value) {
    alert("Please upload a file and enter grade");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("grade", gradeInput.value);

  output.innerHTML = "⏳ Generating game...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (err) {
    output.innerHTML = "❌ Error connecting to AI server";
  }
}
