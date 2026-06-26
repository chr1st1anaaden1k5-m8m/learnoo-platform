const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Toggle Password
togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "👁️";
  }
});

// Form Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear errors
  emailError.style.display = "none";
  passwordError.style.display = "none";

  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;

  if (email === "") {
    emailError.textContent = "Please enter your email";
    emailError.style.display = "block";
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Please enter your password";
    passwordError.style.display = "block";
    isValid = false;
  }

  if (!isValid) return;

  // Loading State
  loginBtn.textContent = "Signing in...";
  loginBtn.disabled = true;

  // Simulate Login Process
  setTimeout(() => {
    alert("✅ Login Successful!\n\nWelcome to Learno Platform");

    // Redirect to Dashboard
    window.location.href = "dashboard.html";
  }, 1600);
});
