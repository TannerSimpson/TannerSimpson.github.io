let count = 1;
const interval = setInterval(()=>{
    //turn allSections into a variable which is the selector for all items
    const allSections = document.querySelectorAll(".items section");
    //select all items and remove highlight
    allSections.forEach((section)=>{
        section.classList.remove("highlighted");
    });

    //loop to continue highlight
    if(count > allSections.length) {
        count = 1;
    }

    //add highlight to each box
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");

    count++;
}, 500);

