function showIllustration(type) {
    document.querySelector('.image_login').style.display = type === 'login' ? 'block' : 'none';
    document.querySelector('.image_register').style.display = type === 'register' ? 'block' : 'none';
    document.querySelector('.image_otp').style.display = type === 'otp' ? 'block' : 'none';
}
function toggleForm(showFormId) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('email-form').style.display = 'none';
    document.getElementById('otp-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById(showFormId).style.display = 'block';
}

function showOtpForm() {
    toggleForm('otp-form');
}

function showRegisterForm() {
    toggleForm('register-form');
}
function toggleCheckbox(element) {
    element.classList.toggle('active');
}
function toggleCheckbox(label) {
    let checkbox = label.querySelector("input");
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
    label.classList.toggle("active", checkbox.checked); // Add active class if checked
}
function toggleCheckbox(label) {
    let checkbox = label.querySelector("input");
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
    label.classList.toggle("active", checkbox.checked); // Add active class if checked
}

function redirectToProfile(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "profile.html"; // Redirect to profile page
}