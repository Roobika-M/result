document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    sessionStorage.setItem('username', username);
    
    window.location.href = 'details.html';
});
