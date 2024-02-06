const initializePage = () => {
    const startRecordingBtn = document.getElementById("startRecordingBtn");
    const infoTextBox = document.getElementById("infoTextBox");
    const informationParagraph = document.getElementById("informationParagraph");
    const createNotesBtn = document.getElementById("createNotesBtn");
    const saveTextFileBtn = document.getElementById("saveTextFileBtn");
    const saveVoiceRecordingBtn = document.getElementById("saveVoiceRecordingBtn");
    const highlightKeyPointsBtn = document.getElementById("highlightKeyPointsBtn");
    const notesTextArea = document.getElementById("notesTextArea");

    // Function to reveal information when the "Begin Recording" button is clicked
    const revealInformation = () => {
        infoTextBox.value = "Your Lecture is being recorded. ";
        informationParagraph.innerText = "Information will be saved here.";
    };

    // Function to add a paragraph to the notes text area when the "Create Notes" button is clicked
    const addParagraphToNotes = () => {
        notesTextArea.value += "In Todays Lecture we went over the following defintions. Method A method in Java is a block of code that, when called, performs specific actions mentioned in it. For instance, if you have written instructions to draw a circle in the method, it will do that task. You can insert values or parameters into methods, and they will only be executed when called. Functions: In computer programming, a function or subroutine is a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed.\n";
    };

    // Function to highlight key points (dummy functionality)
    const highlightKeyPoints = () => {
        notesTextArea.value += "Methods. Functions. \n";
    };

    startRecordingBtn.addEventListener("click", revealInformation);
    createNotesBtn.addEventListener("click", addParagraphToNotes);
    highlightKeyPointsBtn.addEventListener("click", highlightKeyPoints);
};

document.addEventListener("DOMContentLoaded", initializePage);