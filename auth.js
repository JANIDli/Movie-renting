// Initialize users from localStorage or use default users
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'john doe', password: 'password123' },
    { username: 'jane smith', password: 'mypassword' },
    { username: 'alice jones', password: 'alicepassword' }
];

// Save users back to localStorage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Registration Handler
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('register-username').value.trim();
            const password = document.getElementById('register-password').value.trim();

            // Check if user already exists
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                alert('Username already taken. Please choose a different one.');
                return;
            }

            // Add new user to users array
            users.push({ username, password });
            saveUsersToLocalStorage();  // Save updated users list to localStorage
            alert('Registration successful!');
            registerForm.reset();
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }

    // Login Handler
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                alert('Login successful!');
                // Redirect to homepage after successful login
                window.location.href = 'movies.html'; 
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});
