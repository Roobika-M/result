
const username = sessionStorage.getItem('username');

if (username) {
    document.getElementById('usernameDisplay').textContent = username;
} else {
    alert('Please log in first!');
    window.location.href = 'login.html';
}

document.getElementById('submitButton').addEventListener('click', function() {
    window.location.href = 'upload.html'; 
});

