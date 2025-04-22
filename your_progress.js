document.addEventListener('DOMContentLoaded', function() {
   
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('userName').textContent = userEmail.split('@')[0];
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
    loadUserData();
    loadPunchData();
    renderMiniCalendar();
    checkAlerts();
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });
});
