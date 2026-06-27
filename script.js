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
// Forgot Password Modal
const forgotLink = document.getElementById("forgotPassword");
const modal = document.getElementById("forgotModal");
const closeModal = document.getElementById("closeModal");
const sendResetBtn = document.getElementById("sendResetBtn");

forgotLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

sendResetBtn.addEventListener("click", () => {
  const email = document.getElementById("resetEmail").value;
  if (email) {
    alert(`✅ Password reset link has been sent to ${email}`);
    modal.style.display = "none";
  } else {
    alert("Please enter your email");
  }
});

// Google Login (Demo)
document.getElementById("googleLogin").addEventListener("click", () => {
  alert("🔵 Google Sign-In\n\n(This feature will work fully after backend integration)");
  // In future, we will connect real Google Auth here
});// Forgot Password Modal
const modal = document.getElementById("forgotModal");
const forgotLink = document.getElementById("forgotPassword");
const closeModal = document.getElementById("closeModal");
const sendResetBtn = document.getElementById("sendResetBtn");

forgotLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

sendResetBtn.addEventListener("click", () => {
  const email = document.getElementById("resetEmail").value.trim();
  if (email) {
    alert(`✅ A password reset link has been sent to ${email}`);
    modal.style.display = "none";
  } else {
    alert("Please enter your email address");
  }
});

// Google Login
document.getElementById("googleLogin").addEventListener("click", () => {
  alert("🔵 Google Sign In\n\nThis will be fully functional after backend integration.");
});