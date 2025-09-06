function uploadVideo() {
    let file = document.getElementById('videoUpload').files[0];
    if (file) {
        alert("Video berhasil diunggah: " + file.name);
    } else {
        alert("Pilih file video terlebih dahulu.");
    }
}