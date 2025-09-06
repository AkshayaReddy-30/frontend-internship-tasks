function validateForm() {
    let valid = true

    //Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //Clear old errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    //Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        valid = false;
    }

    //Email validation (basic regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        valid = false;
    }
    return valid;
}