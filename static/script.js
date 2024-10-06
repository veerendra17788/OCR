document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const fileInputLabel = document.querySelector('.file-input__label span');

    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            fileInputLabel.textContent = fileInput.files[0].name;
        } else {
            fileInputLabel.textContent = 'Choose A File';
        }
    });
});
