const initializePage = () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Function to handle changes in the username input
    const handleUsernameInput = () => {
        console.log("Username changed:", usernameInput.value);
    };

    // Function to handle changes in the password input
    const handlePasswordInput = () => {
        console.log("Password changed:", passwordInput.value);
    };

    // Adding event listeners to the username and password inputs
    usernameInput.addEventListener("input", handleUsernameInput);
    passwordInput.addEventListener("input", handlePasswordInput);
};

document.addEventListener("DOMContentLoaded", initializePage);