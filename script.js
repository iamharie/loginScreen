const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = validateForm();
  if (isValid) {
    modalContent.classList.toggle("modal");
  }
});
document.querySelector(".close").addEventListener("click", function () {
  modalContent.classList.add("modal");
});

function validateForm() {
  let isValid = true;

  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  return isValid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
