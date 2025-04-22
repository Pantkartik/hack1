document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.settings-sidebar li');
    const panels = document.querySelectorAll('.settings-panel');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
  
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
      });
    });
    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function () {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('isAdmin');
      window.location.href = 'login.html';
    });
  
    // Load saved settings
    const profileForm = document.getElementById('adminProfileForm');
    const notificationForm = document.getElementById('notificationForm');
    const preferencesForm = document.getElementById('preferencesForm');
  
    const adminData = JSON.parse(localStorage.getItem('adminProfile')) || {
      name: "Admin User",
      email: "admin@graphicera.edu.in"
    };
  
    document.getElementById('adminName').value = adminData.name;
    document.getElementById('adminEmail').value = adminData.email;
  
    const notifications = JSON.parse(localStorage.getItem('notificationSettings')) || {
      reminder: true,
      summary: false
    };
  
    document.getElementById('reminderToggle').checked = notifications.reminder;
    document.getElementById('emailSummaryToggle').checked = notifications.summary;
  
    const preferences = JSON.parse(localStorage.getItem('systemPreferences')) || {
      weeklyHours: 36,
      workingDays: "Mon,Tue,Wed,Thu,Fri"
    };
  
    document.getElementById('weeklyHours').value = preferences.weeklyHours;
    document.getElementById('workingDays').value = preferences.workingDays;
  
    // Save admin profile
    profileForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const updatedProfile = {
        name: document.getElementById('adminName').value,
        email: document.getElementById('adminEmail').value
      };
      localStorage.setItem('adminProfile', JSON.stringify(updatedProfile));
      alert("Profile updated successfully.");
    });
  
    // Save notifications
    notificationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const updatedSettings = {
        reminder: document.getElementById('reminderToggle').checked,
        summary: document.getElementById('emailSummaryToggle').checked
      };
      localStorage.setItem('notificationSettings', JSON.stringify(updatedSettings));
      alert("Notification preferences saved.");
    });
  
    // Save system preferences
    preferencesForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const prefs = {
        weeklyHours: parseInt(document.getElementById('weeklyHours').value),
        workingDays: document.getElementById('workingDays').value
      };
      localStorage.setItem('systemPreferences', JSON.stringify(prefs));
      alert("System preferences saved.");
    });
  });