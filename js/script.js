// Ambil parameter ?id=xxxx dari URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const output = document.getElementById("output");

// Jika tidak ada ID
if (!id) {
    output.innerHTML = "<p style='color:red'>ID tidak ditemukan di URL.</p>";
} else {
    // Ambil data JSON berdasarkan id
    fetch(`data/${id}.json`)
        .then(res => {
            if (!res.ok) throw new Error("Data tidak ditemukan");
            return res.json();
        })
        .then(data => {
            output.innerHTML = `
                <p><strong>Nama:</strong> ${data.name}</p>
                <p><strong>ID Number:</strong> ${data.idnum}</p>
                <p><strong>Informasi:</strong> ${data.info}</p>
                <img src="${data.photo}" class="photo" alt="Foto">
            `;
        })
        .catch(err => {
            output.innerHTML = `<p style='color:red'>${err.message}</p>`;
        });
}
