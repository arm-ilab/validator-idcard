// Ambil query param ?id=1234
const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "1234"; // default 1234

// Load data JSON
fetch(`data/${id}.json`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("idnum").textContent = data.idnum;
    document.getElementById("info").textContent = data.info;
    document.getElementById("photo").src = data.photo;
  })
  .catch(err => {
    document.getElementById("name").textContent = "Data tidak ditemukan";
    document.getElementById("idnum").textContent = "";
    document.getElementById("info").textContent = "";
  });
