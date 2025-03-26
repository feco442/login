document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = ''; 
    
    if (username.length < 8 || username.length > 16) {
        messageDiv.innerHTML = '<p class="error">Username must be between 8 and 16 characters.</p>';
        return;
    }

   
    if (password.length < 12 || password.length > 16) {
        messageDiv.innerHTML = '<p class="error">Password must be between 12 and 16 characters.</p>';
        return;
    }

    messageDiv.innerHTML = '<p class="success">Login successful!</p>';
});