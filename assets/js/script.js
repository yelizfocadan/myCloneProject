// Redirect to login page
function goToLoginPage() {
    window.location.href = 'login.html';
}

// Handle the logo click, could be used for navigation if necessary
function goToMainPage() {
    window.location.href = 'index.html';
}

// Function to toggle popup visibility
function togglePopup() {
    const popup = document.getElementById('popup-content');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}