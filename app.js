
/*
    COMP2245 Project 1
    Mailing List Form Validation
*/

// Find the form
const form = document.getElementById("signup-form");

// Listen for the form submission
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const frequency = document.getElementById("frequency");

    // Get the error paragraphs
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const frequencyError = document.getElementById("frequency-error");

    // Get the success message element
    const formMessage = document.getElementById("form-message");

    // Remove any previous success message
    formMessage.textContent = "";
    formMessage.classList.remove("success");

    // Remove spaces from the beginning and end
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const frequencyValue = frequency.value.trim();

    // Keep track of the first field with an error
    let firstError = null;

    // Check the name
    if (nameValue === "") {

        nameError.textContent = "Enter your name.";
        name.setAttribute("aria-invalid", "true");

        firstError = name;

    } else {

        nameError.textContent = "";
        name.removeAttribute("aria-invalid");

    }

    // Check the email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {

        emailError.textContent = "Enter your email address.";
        email.setAttribute("aria-invalid", "true");

        if (firstError === null) {
            firstError = email;
        }

    } else if (!emailPattern.test(emailValue)) {

        emailError.textContent =
            "Enter an email address like name@example.com.";

        email.setAttribute("aria-invalid", "true");

        if (firstError === null) {
            firstError = email;
        }

    } else {

        emailError.textContent = "";
        email.removeAttribute("aria-invalid");

    }

    // Check the frequency
    if (frequencyValue === "") {

        frequencyError.textContent =
            "Choose how often we should email you.";

        frequency.setAttribute("aria-invalid", "true");

        if (firstError === null) {
            firstError = frequency;
        }

    } else {

        frequencyError.textContent = "";
        frequency.removeAttribute("aria-invalid");

    }

    // If there are errors, focus on the first incorrect field
    if (firstError !== null) {

        firstError.focus();
        return;

    }

    // If all fields are correct, show the thank-you message
    formMessage.textContent =
        "Thank you, " + nameValue +
        "! You're on the mailing list.";

    // Add the success class
    formMessage.classList.add("success");

    // Clear the form
    form.reset();

});

