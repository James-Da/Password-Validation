// Select the password input field, eye icon, and password requirements list items
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// Define an array of password requirements with corresponding regular expressions and indexes
const requirements = [
  { regex: /.{8,}/, index: 0 }, // At least 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
  { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];

// Add an event listener to the password input field for when the user types in it
passwordInput.addEventListener("keyup", (e) => {
  console.log("In event"); // Debugging line, can be removed
  // Loop through each requirement and check if it's met by the current value of the input field
  requirements.forEach((item) => {
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    // If the requirement is met, show a green check mark and add "valid" class to the corresponding list item
    if (isValid) {
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      requirementItem.classList.add("valid");
    }
    // If the requirement is not met, show a gray circle icon
    else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
    }
  });
});

// Add an event listener to the eye icon for when the user clicks on it
eyeIcon.addEventListener("click", () => {
  // Toggle between showing and hiding the password input
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Change the eye icon to either an open eye or closed eye with a slash depending on the current password input visibility
  eyeIcon.className = `fa solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
