const initializePage = () => {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const schoolInput = document.getElementById("school");
    const gradeLevelSelect = document.getElementById("gradeLevel");

    // Function to handle changes in the first name input
    const handleFirstNameInput = () => {
        console.log("First Name changed:", firstNameInput.value);
    };

    // Function to handle changes in the last name input
    const handleLastNameInput = () => {
        console.log("Last Name changed:", lastNameInput.value);
    };

    // Function to handle changes in the username input
    const handleUsernameInput = () => {
        console.log("Username changed:", usernameInput.value);
    };

    // Function to handle changes in the password input
    const handlePasswordInput = () => {
        console.log("Password changed:", passwordInput.value);
    };

    // Function to handle changes in the school input
    const handleSchoolInput = () => {
        console.log("School changed:", schoolInput.value);
    };

    // Function to handle changes in the grade level select
    const handleGradeLevelSelect = () => {
        console.log("Grade Level changed:", gradeLevelSelect.value);
    };

    // Adding event listeners to the inputs and select
    firstNameInput.addEventListener("input", handleFirstNameInput);
    lastNameInput.addEventListener("input", handleLastNameInput);
    usernameInput.addEventListener("input", handleUsernameInput);
    passwordInput.addEventListener("input", handlePasswordInput);
    schoolInput.addEventListener("input", handleSchoolInput);
    gradeLevelSelect.addEventListener("change", handleGradeLevelSelect);
};

document.addEventListener("DOMContentLoaded", initializePage);