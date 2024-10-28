// Display the username from session storage
document.getElementById('usernameDisplay').textContent = sessionStorage.getItem('username') || 'Guest';

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            alert(`File uploaded successfully: ${file.name}`);
            // Handle file content if necessary (e.g., display it, send it to a server)
        };
        reader.readAsText(file); // Adjust as needed (readAsDataURL for images, etc.)
    } else {
        alert('No file selected!');
    }
});
