const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const nameField = document.getElementById("name");
const idnumField = document.getElementById("idnum");
const infoField = document.getElementById("info");
const photoField = document.getElementById("photo");
const errorField = document.getElementById("error");

if (!id) {
    errorField.textContent = "ID tidak ditemukan di URL.";
} else {
    fetch(`data/${id}.json`)
        .then(res => {
            if (!res.ok) throw new Error("Data tidak ditemukan.");
            return res.json();
        })
        .then(data => {
            nameField.textContent = data.name;
            idnumField.textContent = data.idnum;
            infoField.textContent = data.info;
            photoField.src = data.photo;
        })
        .catch(err => {
            errorField.textContent = err.message;
        });
}
