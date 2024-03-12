const submitRacoonForm = (e) => {
    e.preventDefault(); // Dont refresh the page

    const form = e.target;
    const racoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");

}

const getRadioVallue = (radioname) => {
    const radios = document.getElementsByName(radioname);

    for(let i in radios) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }

    return "";
}

document.getElementById("form-raccoon").onsubmit = submitRacoonForm;