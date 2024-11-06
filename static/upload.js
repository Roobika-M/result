document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0]; // Get the selected file

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }
    console.log('File ready for upload:', file.name);
    const formData = new FormData();
    formData.append('file', file);

    fetch('YOUR_SERVER_ENDPOINT', {  // Replace with your actual server endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Redirect to another page if needed
        window.location.href = 'anotherPage.html'; // Change this to your target page
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
