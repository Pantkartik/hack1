document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real app, you would validate with server
    if (email.endsWith('@graphicera.edu.in')) {
        // Store user session (simplified for demo)
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to dashboard
        window.location.href = 'index.html';
    } else {
        alert('Please use your institutional email');
    }
});

// Check if user is already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'index.html';
}