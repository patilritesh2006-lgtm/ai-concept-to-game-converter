async function upload() {
  const file = document.getElementById("file").files[0];
  const grade = document.getElementById("grade").value;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("grade", grade);

  const res = await fetch("https://YOUR_BACKEND_URL/generate-game", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  document.getElementById("output").innerText =
    JSON.stringify(data, null, 2);
}
