const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "👁️";
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  loginBtn.textContent = "Signing in...";
  loginBtn.disabled = true;

  setTimeout(() => {
    const userData = { email, name: email.split("@")[0] };
    localStorage.setItem("currentUser", JSON.stringify(userData));
    
    alert("✅ Login Successful!");
    window.location.href = "dashboard.html";
  }, 1500);
});