const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const showPassword = document.getElementById("show-password");
const error = document.getElementById("error");
const loginBtn = document.getElementById("loginBtn");

let attemptsLeft = 3;


// --- Live validation and UI feedback ---
// Create elements for validation messages if not present
let emailMsg = document.getElementById('email-msg');
let passMsg = document.getElementById('pass-msg');
if (!emailMsg) {
  emailMsg = document.createElement('div');
  emailMsg.id = 'email-msg';
  emailMsg.className = 'error-msg';
  username.parentNode.insertBefore(emailMsg, username.nextSibling);
}
if (!passMsg) {
  passMsg = document.createElement('div');
  passMsg.id = 'pass-msg';
  passMsg.className = 'error-msg';
  password.parentNode.insertBefore(passMsg, password.nextSibling);
}

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(pass) {
  // At least 8 chars, one number, one special char
  return /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(pass);
}

function updateValidation() {
  let valid = true;
  // Email validation
  if (!validateEmail(username.value.trim())) {
    emailMsg.textContent = 'Enter a valid email address.';
    valid = false;
  } else {
    emailMsg.textContent = '';
  }
  // Password validation
  if (!validatePassword(password.value)) {
    passMsg.textContent = 'Password must be 8+ chars, include a number and a special symbol.';
    valid = false;
  } else {
    passMsg.textContent = '';
  }
  loginBtn.disabled = !valid;
}

username.addEventListener('input', updateValidation);
password.addEventListener('input', updateValidation);
updateValidation();
    
// Hardcoded credentials
const VALID_USER = "admin";
const VALID_PASS = "pass123";

// Show/hide password toggle
showPassword.addEventListener("change", () => {
  password.type = showPassword.checked ? "text" : "password";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = username.value.trim();
  const pass = password.value;

  // Basic validation
  if (user === "" || pass.length < 6) {
    error.textContent = "Username is required. Password must be at least 6 characters.";
    return;
  }

  // Credential check
  if (user === VALID_USER && pass === VALID_PASS) {
    window.location.href = "success.html";
  } else {
    attemptsLeft--;
    if (attemptsLeft <= 0) {
      loginBtn.disabled = true;
      error.textContent = "Too many failed attempts. Try again later.";
    } else {
      error.textContent = `Invalid credentials. Attempts left: ${attemptsLeft}`;
    }
  }
});
